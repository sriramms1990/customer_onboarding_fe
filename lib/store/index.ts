import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { OnboardingStore } from './types';
import { createOnboardingSlice } from './slices/onboarding-slice';

export const useOnboardingStore = create<OnboardingStore>()(
  persist(createOnboardingSlice, {
    name: 'onboarding-storage',
  })
);

// Export types
export type { UserData, OnboardingState, OnboardingStore } from './types';