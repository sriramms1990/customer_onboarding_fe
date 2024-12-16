'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { birthDateSchema } from '@/lib/validations';
import { useOnboardingStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export function BirthDateForm() {
  const router = useRouter();
  const { setUserData, setCurrentStep, completeStep } = useOnboardingStore();
  
  const form = useForm({
    resolver: zodResolver(birthDateSchema),
    defaultValues: {
      birthDate: '',
    },
  });

  const onSubmit = (data: any) => {
    setUserData(data);
    completeStep(2); // Mark step 2 as completed
    setCurrentStep(3);
    router.push('/onboarding/address');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birth Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/onboarding/about-me')}
            className="flex-1"
          >
            Back
          </Button>
          <Button type="submit" className="flex-1">Continue</Button>
        </div>
      </form>
    </Form>
  );
}