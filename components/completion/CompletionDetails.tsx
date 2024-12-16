import { Card } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

interface CompletionDetailsProps {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
}

export function CompletionDetails({ userData }: CompletionDetailsProps) {
  const details = [
    {
      label: 'Name',
      value: `${userData.firstName} ${userData.lastName}`,
    },
    {
      label: 'Email',
      value: userData.email,
    },
    {
      label: 'Birth Date',
      value: formatDate(userData.birthDate),
    },
    {
      label: 'Address',
      value: `${userData.address.street}, ${userData.address.city}, ${userData.address.state} ${userData.address.zipCode}`,
    },
  ];

  return (
    <Card className="bg-muted p-6">
      <dl className="divide-y divide-border">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="flex justify-between py-3 text-sm"
          >
            <dt className="text-muted-foreground">{detail.label}</dt>
            <dd className="font-medium text-foreground">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}