'use client';

import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useOnboardingStore } from '@/lib/store';
import Link from 'next/link';
import { CompletionDetails } from './CompletionDetails';

export function CompletionCard() {
  const { userData, resetOnboarding } = useOnboardingStore();

  useEffect(() => {
    // Clean up onboarding data when leaving the completion page
    return () => {
      resetOnboarding();
    };
  }, [resetOnboarding]);

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-16 w-16 text-primary">
          <CheckCircle className="h-16 w-16" />
        </div>
        <h2 className="text-2xl font-bold">Welcome Aboard!</h2>
        <p className="text-muted-foreground">
          Thank you for completing the onboarding process
        </p>
      </CardHeader>
      <CardContent>
        <CompletionDetails userData={userData} />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/dashboard">
          <Button size="lg">Go to Dashboard</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}