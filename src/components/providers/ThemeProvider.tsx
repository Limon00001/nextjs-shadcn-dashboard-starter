/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 26 Apr, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Client component
'use client';

// External imports
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

// ThemeProvider component
// This component is used to provide the theme context to the application
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
