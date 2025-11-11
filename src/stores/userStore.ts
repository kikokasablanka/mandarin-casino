import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  chips: number;
  level: number;
  xp: number;
  streak: number;
  addChips: (amount: number) => void;
  removeChips: (amount: number) => void;
  addXP: (amount: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      chips: 1000,
      level: 1,
      xp: 0,
      streak: 0,
      addChips: (amount) => set((state) => ({ chips: state.chips + amount })),
      removeChips: (amount) => set((state) => ({ chips: Math.max(0, state.chips - amount) })),
      addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
    }),
    {
      name: 'mandarin-casino-user',
    }
  )
);