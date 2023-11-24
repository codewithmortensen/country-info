'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ColorMode() {
  const { setTheme, theme } = useTheme();

  if (theme === 'light')
    return (
      <span>
        <Moon />
      </span>
    );
}
