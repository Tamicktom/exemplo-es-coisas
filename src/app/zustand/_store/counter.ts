"use client";
import { create } from "zustand";

interface State {
  count: number;
}

interface Actions {
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
