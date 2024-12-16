'use client';

import { useOnboardingStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

const steps = [
  { id: 1, label: 'About Me' },
  { id: 2, label: 'Personal Info' },
  { id: 3, label: 'Contact Info' },
  { id: 4, label: 'Complete' },
];

export function OnboardingProgress() {
  const { currentStep, completedSteps } = useOnboardingStore();

  return (
    <div className="mb-8">
      <div className="relative">
        {/* Progress Bar */}
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{
              width: `${((Math.max(1, currentStep) - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative z-10 flex justify-between">
          {steps.map((step) => {
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = currentStep === step.id;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center"
              >
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors duration-200',
                    {
                      'border-primary bg-primary text-primary-foreground': isCompleted || isCurrent,
                      'border-gray-300 bg-white': !isCompleted && !isCurrent,
                    }
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className={cn(
                      'text-sm font-semibold',
                      isCurrent ? 'text-primary-foreground' : 'text-gray-500'
                    )}>
                      {step.id}
                    </span>
                  )}
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}