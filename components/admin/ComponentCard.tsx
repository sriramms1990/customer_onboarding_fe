import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { FormComponent } from '@/lib/store/types/admin';

interface ComponentCardProps {
  component: FormComponent;
  onMove: (id: string, toPage: number) => void;
}

export function ComponentCard({ component, onMove }: ComponentCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">{component.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Currently on Page {component.page}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onMove(component.id, 2)}
            disabled={component.page === 2}
          >
            <ArrowLeftCircle className="h-4 w-4 mr-2" />
            Move to Page 2
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onMove(component.id, 3)}
            disabled={component.page === 3}
          >
            <ArrowRightCircle className="h-4 w-4 mr-2" />
            Move to Page 3
          </Button>
        </div>
      </div>
    </Card>
  );
}