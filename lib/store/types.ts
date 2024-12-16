export interface UserData {
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
}

export interface OnboardingState {
  currentStep: number;
  completedSteps: number[];
  userData: UserData;
}

export interface OnboardingActions {
  setCurrentStep: (step: number) => void;
  completeStep: (step: number) => void;
  setUserData: (data: Partial<UserData>) => void;
  resetOnboarding: () => void;
}

export type OnboardingStore = OnboardingState & OnboardingActions;