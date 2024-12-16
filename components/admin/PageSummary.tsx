import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ComponentAssignment } from '@/lib/store/admin-store';

interface PageSummaryProps {
  pageNumber: number;
  components: ComponentAssignment[];
}

export function PageSummary({ pageNumber, components }: PageSummaryProps) {
  const pageComponents = components.filter((c) => c.page === pageNumber);

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Page {pageNumber}</h3>
      </CardHeader>
      <CardContent>
        {pageComponents.length > 0 ? (
          <ul className="space-y-2">
            {pageComponents.map((component) => (
              <li
                key={component.id}
                className="p-2 bg-muted rounded-md text-sm"
              >
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