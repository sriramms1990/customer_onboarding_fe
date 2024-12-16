'use client';

import { cn } from '@/lib/utils';
import { StepLabelProps } from './types';

export function StepLabel({ step, currentStep, completedSteps }: StepLabelProps) {
  const isCompleted = completedSteps.includes(step.id);
  const isCurrent = currentStep === step.id;

  return (
    <span className={cn(
      'text-sm mt-2 font-medium transition-colors duration-300',
      isCompleted && 'text-primary',
      isCurrent && 'text-primary',
      !isCompleted && !isCurrent && 'text-muted-foreground'
    )}>
      {step.name}
    </span>
  );
}