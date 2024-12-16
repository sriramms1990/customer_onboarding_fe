import { Button } from '@/components/ui/button';
import { UserPlus, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Welcome to Customer Onboarding
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Start your journey with us. Our streamlined onboarding process makes it easy to get started.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding/about-me">
              <Button size="lg" className="gap-2">
                <UserPlus className="h-5 w-5" />
                Start Onboarding
              </Button>
            </Link>
            <Link href="/admin">
              <Button size="lg" variant="outline" className="gap-2">
                <Settings className="h-5 w-5" />
                Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}