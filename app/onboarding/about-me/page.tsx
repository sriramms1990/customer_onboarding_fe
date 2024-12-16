import { AboutMeForm } from '@/components/forms/AboutMe';

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tell us about yourself</h2>
          <AboutMeForm />
        </div>
      </div>
    </div>
  );
}