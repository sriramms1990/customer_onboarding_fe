'use client';

import { ProgressBarProps } from './types';

export function ProgressBar({ completedSteps = [], totalSteps }: ProgressBarProps) {
  const progress = Math.min(
    100,
    ((completedSteps?.length || 0) / (Math.max(1, totalSteps - 1))) * 100
  );

  return (
    <div className="absolute left-0 top-4 h-0.5 w-full -translate-y-1/2 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}