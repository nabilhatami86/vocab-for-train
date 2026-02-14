'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Headphones, Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  text: string;
  label?: string;
}

export default function TTSPlayer({ text, label }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(0.85);
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalCharsRef = useRef(0);
  const spokenCharsRef = useRef(0);

  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      cleanup();
    };
  }, [cleanup]);

  const handlePlay = useCallback(() => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();
    cleanup();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;

    // Try to pick a good English voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Google') || v.name.includes('Natural'))
    );
    if (preferred) utterance.voice = preferred;

    totalCharsRef.current = text.length;
    spokenCharsRef.current = 0;

    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        spokenCharsRef.current = e.charIndex;
        const pct = Math.min(100, (e.charIndex / totalCharsRef.current) * 100);
        setProgress(pct);
        setCurrentWord(text.slice(e.charIndex, e.charIndex + (e.charLength || 0)));
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      setCurrentWord('');
      cleanup();
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(0);
      setCurrentWord('');
      cleanup();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);

    // Chrome bug workaround: keep synthesis alive
    intervalRef.current = setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 14000);
  }, [text, rate, isPaused, cleanup]);

  const handlePause = useCallback(() => {
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  }, []);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    setCurrentWord('');
    cleanup();
  }, [cleanup]);

  const speeds = [0.6, 0.75, 0.85, 1, 1.15];

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-(--text) flex items-center gap-2">
        <Headphones className="w-5 h-5 text-primary" /> {label || 'Audio'}
      </h2>
      <div className="bg-(--bg-card) border border-(--border) rounded-xl p-5 space-y-4">
        {/* Progress bar */}
        <div className="w-full bg-(--bg-secondary) rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Play className="w-4 h-4" /> {isPaused ? 'Resume' : 'Play'}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Pause className="w-4 h-4" /> Pause
            </button>
          )}

          <button
            onClick={handleStop}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-(--border) text-(--text-secondary) text-sm hover:bg-(--hover) transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>

          {/* Speed selector */}
          <div className="flex items-center gap-1 ml-auto">
            <Volume2 className="w-4 h-4 text-(--text-muted)" />
            {speeds.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setRate(s);
                  if (isPlaying || isPaused) {
                    window.speechSynthesis.cancel();
                    setIsPlaying(false);
                    setIsPaused(false);
                    setProgress(0);
                    cleanup();
                  }
                }}
                className={cn(
                  'px-2 py-1 rounded text-xs font-medium transition-colors',
                  rate === s
                    ? 'bg-primary/15 text-primary'
                    : 'text-(--text-muted) hover:text-(--text-secondary)'
                )}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>

        {/* Currently speaking word */}
        {currentWord && (
          <p className="text-xs text-(--text-muted) flex items-center gap-2">
            <VolumeX className="w-3 h-3" />
            Speaking: <span className="font-semibold text-primary">{currentWord}</span>
          </p>
        )}
      </div>
    </section>
  );
}
