'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Volume2, BookOpen, PenLine, MessageCircle, Trophy, Globe } from 'lucide-react';

const SECTIONS = [
  {
    id: 'listening',
    title: 'Listening',
    icon: Volume2,
    links: [
      {
        label: 'mini-ielts listening tests',
        url: 'http://mini-ielts.com/listening',
        desc: 'Short targeted practice tests, section by section',
      },
      {
        label: '184 IELTS listening tests',
        url: 'https://practicepteonline.com/ielts-listening-tests/',
        desc: 'Large collection of full listening tests',
      },
      {
        label: 'Cambridge IELTS books (1–15)',
        url: 'https://ieltspracticeonline.com/download-all-cambridge-ielts-books-pdfaudio-1-14/',
        desc: 'Official Cambridge materials with PDF & audio',
      },
      {
        label: 'IELTS UP listening practice',
        url: 'https://ielts-up.com/listening/ielts-listening-practice.html',
        desc: 'Interactive online listening exercises',
      },
    ],
  },
  {
    id: 'reading',
    title: 'Reading',
    icon: BookOpen,
    links: [
      {
        label: 'mini-ielts reading tests',
        url: 'http://mini-ielts.com/reading',
        desc: 'Short reading practice with instant answers',
      },
      {
        label: '225 IELTS Academic Reading tests',
        url: 'https://practicepteonline.com/ielts-reading-tests/',
        desc: 'Extensive academic reading test collection',
      },
      {
        label: '100 IELTS General Reading tests',
        url: 'https://practicepteonline.com/ielts-general-reading-tests/',
        desc: 'General Training reading practice',
      },
      {
        label: 'Cambridge IELTS books (1–15)',
        url: 'https://ieltspracticeonline.com/download-all-cambridge-ielts-books-pdfaudio-1-14/',
        desc: 'Official Cambridge materials PDF & audio',
      },
      {
        label: 'IELTS UP Academic Reading',
        url: 'https://ielts-up.com/reading/ielts-reading-practice.html#academic',
        desc: 'Online academic reading exercises',
      },
      {
        label: 'IELTS UP General Reading',
        url: 'https://ielts-up.com/reading/ielts-reading-practice.html#general',
        desc: 'Online general training reading exercises',
      },
    ],
  },
  {
    id: 'writing',
    title: 'Writing',
    icon: PenLine,
    links: [
      {
        label: 'Improve Your Writing Score',
        url: 'http://www.ielts-practice.org/ielts-writing/',
        desc: 'Strategies and tips for higher band scores',
      },
      {
        label: '248 Band 9 IELTS Essays',
        url: 'http://www.ielts-practice.org/band-9-essays/',
        desc: 'Top-scoring model essays to study from',
      },
      {
        label: '100+ Band 8 IELTS Essays',
        url: 'http://www.ielts-practice.org/band-8-essays/',
        desc: 'Near-perfect essay examples',
      },
      {
        label: 'Model Essays with Feedback',
        url: 'https://www.ieltsbuddy.com/ielts-sample-essays.html',
        desc: 'Annotated samples with examiner comments',
      },
      {
        label: 'IELTS Writing Task 1 (Academic)',
        url: 'https://www.ieltsbuddy.com/ielts-writing-task-1.html',
        desc: 'Charts, graphs & diagram practice',
      },
      {
        label: 'IELTS Letter Writing Tips',
        url: 'https://ieltsliz.com/ielts-letter-writing-essential-tips/',
        desc: 'Essential tips for General Training Task 1',
      },
      {
        label: 'Collection of Writing Topics',
        url: 'https://writing9.com/ielts-writing-task-2-topics',
        desc: '1000+ Task 2 essay topics',
      },
      {
        label: 'IELTS Writing Vocabulary',
        url: 'https://ielts-up.com/writing/ielts-vocabulary-writing.html',
        desc: 'Band 7+ vocabulary for essays',
      },
    ],
  },
  {
    id: 'speaking',
    title: 'Speaking',
    icon: MessageCircle,
    links: [
      {
        label: 'IELTS Speaking Vocabulary',
        url: 'https://ielts-up.com/speaking/ielts-vocabulary-speaking.html',
        desc: 'Topic-specific vocabulary for the speaking test',
      },
      {
        label: 'Speaking Part 1 Topics',
        url: 'https://ieltsliz.com/ielts-speaking-part-1-topics/',
        desc: 'Common personal & everyday topics',
      },
      {
        label: 'Speaking Part 2 Topics',
        url: 'https://ieltsliz.com/ielts-speaking-part-2-topics/',
        desc: 'Cue card topics to practice long turns',
      },
      {
        label: 'Speaking Part 3 Topics',
        url: 'https://ieltsliz.com/ielts-speaking-part-3-topics-2/',
        desc: 'Abstract discussion & opinion questions',
      },
    ],
  },
  {
    id: 'mock-tests',
    title: 'Mock Tests (100+)',
    icon: Trophy,
    links: [
      {
        label: 'IELTS Academic Mock Tests',
        url: 'https://ieltsonlinetests.com/ielts-exam-library#academic',
        desc: 'Full computer-based academic practice tests',
      },
      {
        label: 'IELTS General Mock Tests',
        url: 'https://ieltsonlinetests.com/ielts-exam-library#general-test',
        desc: 'Full computer-based General Training tests',
      },
    ],
  },
];

export default function IELTSResourcesPage() {
  return (
    <div className="p-4 lg:p-6 max-w-2xl mx-auto space-y-6 animate-fade-in">
      <Link href="/practice" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Practice
      </Link>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Globe className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-bold text-(--text)">IELTS Resources</h1>
        </div>
        <p className="text-sm text-(--text-secondary)">
          Kumpulan link latihan IELTS terbaik — langsung menuju website eksternal.
          Semua link ini gratis dan terbukti membantu mencapai band tinggi.
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-(--text-muted) bg-(--bg-secondary) border border-(--border) rounded-xl px-3 py-2">
          <span className="text-primary font-bold">Curated by:</span>
          <span>Listening 8 · Reading 9 · Speaking 8.5 · Writing 7 (IELTS General Training)</span>
        </div>
      </div>

      {/* Sections */}
      {SECTIONS.map(section => {
        const Icon = section.icon;
        return (
          <div key={section.id} className="space-y-2">
            {/* Section header */}
            <div className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-primary" />
              <h2 className="font-bold text-(--text)">{section.title}</h2>
              <span className="text-xs text-(--text-muted) bg-(--bg-secondary) border border-(--border) px-1.5 py-0.5 rounded-full ml-auto">
                {section.links.length} links
              </span>
            </div>

            {/* Links */}
            <div className="space-y-1.5">
              {section.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 px-4 py-3 rounded-xl bg-(--bg-card) border border-(--border) hover:border-primary/40 hover:bg-(--bg-secondary) transition-all group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-(--text) group-hover:text-primary transition-colors truncate">
                      {link.label}
                    </p>
                    <p className="text-xs text-(--text-muted) mt-0.5">{link.desc}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </div>
        );
      })}

      {/* Footer note */}
      <p className="text-xs text-(--text-muted) text-center pb-4">
        Link di atas mengarah ke website eksternal. Konten dan ketersediaan tergantung masing-masing website.
      </p>
    </div>
  );
}
