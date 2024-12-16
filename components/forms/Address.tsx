'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addressSchema } from '@/lib/validations';
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
import { useToast } from '@/hooks/use-toast';

export function AddressForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { setUserData, setCurrentStep, completeStep, userData } = useOnboardingStore();
  
  const form = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      street: userData.address.street || '',
      city: userData.address.city || '',
      state: userData.address.state || '',
      zipCode: userData.address.zipCode || '',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setUserData({ address: data });
      completeStep(3); // Mark step 3 as completed
      setCurrentStep(4);
      
      // Save data to backend
      const response = await fetch('/api/onboarding/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userData, address: data }),
      });

      if (!response.ok) throw new Error('Failed to save data');

      toast({
        title: "Success!",
        description: "Your information has been saved.",
      });
      
      router.push('/onboarding/completion');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your information. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="New York" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="NY" maxLength={2} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP Code</FormLabel>
              <FormControl>
                <Input placeholder="12345" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/onboarding/birth-date')}
            className="flex-1"
          >
            Back
          </Button>
          <Button type="submit" className="flex-1">Complete</Button>
        </div>
      </form>
    </Form>
  );
}