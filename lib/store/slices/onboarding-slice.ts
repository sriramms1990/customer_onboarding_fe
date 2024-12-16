import { StateCreator } from 'zustand';
import { OnboardingStore } from '../types';
import { initialState } from '../initial-state';

export const createOnboardingSlice: StateCreator<OnboardingStore> = (set) => ({
  ...initialState,
  setCurrentStep: (step) => set({ currentStep: step }),
  completeStep: (step) => 
    set((state) => {
      const newCompletedSteps = Array.from(
        new Set([...(state.completedSteps || []), step])
      ).sort((a, b) => a - b);
      
      return {
        completedSteps: newCompletedSteps,
        currentStep: step + 1
      };
    }),
  setUserData: (data) =>
    set((state) => ({
      userData: {
        ...state.userData,
        ...data,
        address: {
          ...state.userData.address,
          ...(data.address || {}),
        },
      },
    })),
  resetOnboarding: () => set(initialState),
});