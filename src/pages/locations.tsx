import { PrismaClient } from '@prisma/client';

import { LocationRating } from '@/components/ui/Ratings/LocationRating';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const prisma = new PrismaClient();

export default function Locations({ location, error, isLoading }) {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 254)}...` : input;

  return (
    <Main
      meta={<Meta title="SCUBAbooker | Locations" description="Lorem ipsum" />}
    >
      <div>
        <h3>LOKACIJE</h3>

        <ul>
          {location.map((location) => (
            <li key={location.id}>
              <span>
                <p>
                  <strong>{location.name}</strong>
                </p>
              </span>
              <span className="description"> {location.description}</span>
              <p>{location.type.name}</p>
              <p>{location.category.name}</p>
              <dir>
                <LocationRating />
              </dir>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
}

export async function getServerSideProps() {
  const location = await prisma.location.findMany({
    include: {
      type: {
        select: {
          name: true,
        },
      },
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    props: {
      location: JSON.parse(JSON.stringify(location)), // <== here is a solution
      type: JSON.parse(JSON.stringify(location)),
      category: JSON.parse(JSON.stringify(location)),
    },
  };
}
