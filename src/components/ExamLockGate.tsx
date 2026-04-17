'use client';

import { useState, useEffect } from 'react';
import { Lock, KeyRound, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Kode akses ujian ─────────────────────────────────────────────────────────
// Ganti nilai ini untuk mengubah kode. Gunakan kode berbeda untuk setiap jenis ujian.
export const EXAM_CODES: Record<string, string> = {
  'middle-test': 'MIDTEST',
  'post-test':   'POSTTEST',
};

interface ExamLockGateProps {
  examType: 'middle-test' | 'post-test';
  examLabel?: string;
  children: React.ReactNode;
}

const SESSION_KEY = (type: string) => `exam-unlocked-${type}`;

export default function ExamLockGate({ examType, examLabel, children }: ExamLockGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [shaking, setShaking] = useState(false);

  // Cek sessionStorage saat mount — kalau sudah pernah buka di tab ini, langsung buka
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(SESSION_KEY(examType));
      if (saved === 'true') setUnlocked(true);
    }
  }, [examType]);

  if (unlocked) return <>{children}</>;

  const correctCode = EXAM_CODES[examType];
  const label = examLabel ?? (examType === 'middle-test' ? 'Middle Test' : 'Post Test');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (code.trim().toUpperCase() === correctCode) {
      sessionStorage.setItem(SESSION_KEY(examType), 'true');
      setUnlocked(true);
      setError('');
    } else {
      setError('Kode salah. Coba lagi.');
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setCode('');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-(--background)">
      <div className="w-full max-w-sm">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
            <Lock className="w-9 h-9 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Ujian Terkunci
          </div>
          <h1 className="text-xl font-bold text-(--text)">{label}</h1>
          <p className="text-sm text-(--text-muted) mt-1.5">
            Masukkan kode dari guru untuk membuka ujian ini.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-muted)" />
            <input
              type={showCode ? 'text' : 'password'}
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(''); }}
              placeholder="Masukkan kode ujian..."
              autoFocus
              className={cn(
                'w-full pl-10 pr-10 py-3 rounded-xl border text-sm font-mono tracking-widest bg-(--card) text-(--text)',
                'outline-none transition-all',
                error
                  ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20'
                  : 'border-(--border) focus:border-primary focus:ring-2 focus:ring-primary/20',
                shaking && 'animate-[shake_0.4s_ease-in-out]',
              )}
            />
            <button
              type="button"
              onClick={() => setShowCode((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-(--text-muted) hover:text-(--text) transition-colors"
            >
              {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && (
            <p className="text-xs text-red-500 text-center font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={!code.trim()}
            className={cn(
              'w-full py-3 rounded-xl font-semibold text-sm transition-all',
              'bg-primary text-white hover:bg-primary/90 active:scale-[0.98]',
              'disabled:opacity-40 disabled:cursor-not-allowed',
            )}
          >
            Buka Ujian
          </button>
        </form>

        <p className="text-center text-xs text-(--text-muted) mt-6">
          Hubungi guru jika belum mendapat kode.
        </p>
      </div>

      {/* Shake keyframe via style tag */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-6px); }
          40%       { transform: translateX(6px); }
          60%       { transform: translateX(-4px); }
          80%       { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
