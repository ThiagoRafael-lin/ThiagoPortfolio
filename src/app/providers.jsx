'use client';

import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastProvider";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  );
}
