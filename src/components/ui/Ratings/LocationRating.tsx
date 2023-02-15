import clsx from 'clsx';

import Star from '@/components/Icons/Star';

export const LocationRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-x-1">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <Star
            key={i}
            className={clsx('w-4', i < rating ? 'text-white' : 'text-gray-500')}
          />
        );
      })}
    </div>
  );
};
