import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OnboardingState {
  currentStep: number;
  completedSteps: number[];
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
}

interface OnboardingActions {
  setCurrentStep: (step: number) => void;
  completeStep: (step: number) => void;
  setUserData: (data: Partial<OnboardingState['userData']>) => void;
  resetOnboarding: () => void;
}

type OnboardingStore = OnboardingState & OnboardingActions;

const initialState: OnboardingState = {
  currentStep: 1,
  completedSteps: [],
  userData: {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
  },
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      ...initialState,
      setCurrentStep: (step) => set({ currentStep: step }),
      completeStep: (step) => 
        set((state) => ({
          completedSteps: Array.from(new Set([...state.completedSteps, step])).sort((a, b) => a - b),
          currentStep: step + 1,
        })),
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
    }),
    {
      name: 'onboarding-storage',
    }
  )
);