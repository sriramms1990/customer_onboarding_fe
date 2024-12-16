import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { FormComponent } from '@/lib/store/types/admin';

interface PagePreviewProps {
  pageNumber: number;
  components: FormComponent[];
}

export function PagePreview({ pageNumber, components }: PagePreviewProps) {
  const pageComponents = components.filter((c) => c.page === pageNumber);

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Page {pageNumber} Components</h3>
      </CardHeader>
      <CardContent>
        {pageComponents.length > 0 ? (
          <ul className="space-y-2">
            {pageComponents.map((component) => (
              <li
                key={component.id}
                className="p-2 bg-muted rounded-md text-sm flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {component.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No components assigned</p>
        )}
      </CardContent>
    </Card>
  );
}