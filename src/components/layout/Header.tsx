'use client';

import { Menu, Moon, Sun, Search } from 'lucide-react';
import { useVocabStore } from '@/store/useVocabStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Header() {
  const theme = useVocabStore((s) => s.theme);
  const toggleTheme = useVocabStore((s) => s.toggleTheme);
  const setSidebarOpen = useVocabStore((s) => s.setSidebarOpen);
  const setSearchQuery = useVocabStore((s) => s.setSearchQuery);
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(search);
    router.push('/vocab');
  };

  return (
    <header className="sticky top-0 z-30 bg-(--bg)/80 backdrop-blur-md border-b border-(--border)">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-lg hover:bg-(--hover) text-(--text-secondary)"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-muted)" />
            <input
              type="text"
              placeholder="Search vocabulary..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-(--bg-secondary) border border-(--border) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
        </form>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-(--hover) text-(--text-secondary) transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
