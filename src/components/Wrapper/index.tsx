"use client";
import type { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";


export const queryClient = new QueryClient();

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
}