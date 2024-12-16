'use client';

import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StepIndicatorProps } from './types';

export function StepIndicator({ step, currentStep, completedSteps }: StepIndicatorProps) {
  const isCompleted = completedSteps.includes(step.id);
  const isCurrent = currentStep === step.id;

  return (
    <div
      className={cn(
        'h-8 w-8 rounded-full border-2 flex items-center justify-center bg-background transition-colors duration-300',
        isCompleted && 'border-primary bg-primary',
        isCurrent && 'border-primary',
        !isCompleted && !isCurrent && 'border-muted-foreground'
      )}
    >
      {isCompleted ? (
        <CheckCircle className="h-4 w-4 text-white" />
      ) : (
        <span className={cn(
          'text-sm',
          isCurrent && 'text-primary',
          !isCurrent && 'text-muted-foreground'
        )}>
          {step.id}
        </span>
      )}
    </div>
  );
}