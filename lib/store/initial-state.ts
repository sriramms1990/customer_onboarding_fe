import { OnboardingState } from './types';

export const initialState: OnboardingState = {
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