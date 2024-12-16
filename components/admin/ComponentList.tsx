'use client';

import { useAdminStore } from '@/lib/store/admin';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

export function ComponentList() {
  const { components, moveComponent } = useAdminStore();

  const handleMove = (componentId: string, currentPage: number, direction: 'left' | 'right') => {
    const newPage = direction === 'left' ? 2 : 3;
    if (currentPage !== newPage) {
      moveComponent(componentId, newPage);
    }
  };

  return (
    <div className="space-y-4">
      {components.map((component) => (
        <Card key={component.id} className="p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">{component.name}</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleMove(component.id, component.currentPage, 'left')}
                disabled={component.currentPage === 2}
              >
                <ArrowLeftCircle className="h-4 w-4 mr-2" />
                Move to Page 2
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleMove(component.id, component.currentPage, 'right')}
                disabled={component.currentPage === 3}
              >
                <ArrowRightCircle className="h-4 w-4 mr-2" />
                Move to Page 3
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Currently on Page {component.currentPage}
          </p>
        </Card>
      ))}
    </div>
  );
}