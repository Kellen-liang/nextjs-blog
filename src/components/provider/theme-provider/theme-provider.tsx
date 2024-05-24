'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: PropsWithChildren<ThemeProviderProps>) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
