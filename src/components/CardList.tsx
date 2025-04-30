/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 01 May, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External imports
import Image from 'next/image';

// Internal imports
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardTitle } from './ui/card';

// Data
const popularContent = [
  {
    id: 1,
    title: 'JavaScript Tutorial',
    badge: 'Coding',
    image:
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 4300,
  },
  {
    id: 2,
    title: 'Tech Trends 2025',
    badge: 'Tech',
    image:
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 3200,
  },
  {
    id: 3,
    title: 'The Future of AI',
    badge: 'AI',
    image:
      'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 2400,
  },
  {
    id: 4,
    title: 'React Hooks Explained',
    badge: 'Coding',
    image:
      'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 1500,
  },
  {
    id: 5,
    title: 'Image Generation',
    badge: 'AI',
    image:
      'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 1200,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: 'Subscription Renewal',
    badge: 'John Doe',
    image:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 1400,
  },
  {
    id: 2,
    title: 'Payment for Services',
    badge: 'Jane Smith',
    image:
      'https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 2100,
  },
  {
    id: 3,
    title: 'Subscription Renewal',
    badge: 'Michael Johnson',
    image:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 1300,
  },
  {
    id: 4,
    title: 'Payment for Services',
    badge: 'Lily Adams',
    image:
      'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 2500,
  },
  {
    id: 5,
    title: 'Subscription Renewal',
    badge: 'Sam Brown',
    image:
      'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800',
    count: 1400,
  },
];

// Card List Component
const CardList = ({ title }: { title: string }) => {
  const list =
    title === 'Popular Content' ? popularContent : latestTransactions;

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((list) => (
          <Card
            key={list.id}
            className="flex-row items-center justify-between gap-2 ps-3"
          >
            <div className="w-10 h-10 rounded-sm relative overflow-hidden">
              <Image
                src={list.image}
                alt={list.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1">
              <CardTitle>{list.title}</CardTitle>
              <Badge variant="secondary" className="mt-1">
                {list.badge}
              </Badge>
            </CardContent>
            <CardFooter className="p-o">{`${list.count / 1000}K`}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Export
export default CardList;
