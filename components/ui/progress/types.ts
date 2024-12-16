export interface Step {
  id: number;
  name: string;
  path: string;
}

export interface StepIndicatorProps {
  step: Step;
  currentStep: number;
  completedSteps: number[];
}

export interface StepLabelProps extends StepIndicatorProps {}

export interface ProgressBarProps {
  completedSteps: number[];
  totalSteps: number;
}