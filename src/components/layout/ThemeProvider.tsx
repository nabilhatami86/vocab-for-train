'use client';

import { useEffect } from 'react';
import { useVocabStore } from '@/store/useVocabStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useVocabStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <>{children}</>;
}
