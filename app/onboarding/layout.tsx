import { OnboardingProgress } from '@/components/ui/OnboardingProgress';

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <OnboardingProgress />
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}