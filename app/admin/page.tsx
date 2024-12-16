'use client';

import { useAdminStore } from '@/lib/store/admin-store';
import { ComponentCard } from '@/components/admin/ComponentCard';
import { PagePreview } from '@/components/admin/PagePreview';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const { components, moveComponent, resetConfig } = useAdminStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Manage onboarding form components and their page assignments
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
              <Button
                variant="outline"
                onClick={resetConfig}
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset Configuration
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <PagePreview pageNumber={2} components={components} />
            <PagePreview pageNumber={3} components={components} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Component Management</h2>
            <div className="space-y-4">
              {components.map((component) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  onMove={moveComponent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}