'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useIsClient } from '@/app/hooks/use-is-Client';
import { LinkButton } from '@/components/custom/link-button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();
  
  if (!isClient) {
    return null;
  }
  const renderNode = theme === 'dark' 
    ? <Moon className='h-[1.2rem] w-[1.2rem] origin-center rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'  onClick={() => setTheme('light')} />
    : <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' onClick={() => setTheme('dark')} />;
  return <LinkButton className='hover:cursor-pointer origin-center hover:rotate-6'>{renderNode}</LinkButton>;
}
