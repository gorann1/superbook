import { PrismaClient } from '@prisma/client';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const prisma = new PrismaClient();

export default function Zones({ zone, error, isLoading }) {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Main
      meta={<Meta title="SCUBAbooker | Contact" description="Lorem ipsum" />}
    >
      <div>
        <h3>ZONES</h3>

        <ul>
          {zone.map((zone) => (
            <li key={zone.id}>
              <span>
                <p>
                  <strong>{zone.name}</strong>
                </p>
              </span>
              <span> {zone.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
}

export async function getServerSideProps() {
  const zone = await prisma.zone.findMany();

  return {
    props: {
      zone: JSON.parse(JSON.stringify(zone)), // <== here is a solution
    },
  };
}
