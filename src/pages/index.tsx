import { useRouter } from 'next/router';

import Heart from '@/components/Icons/Heart';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="SCUBAbooker Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div>Lorem Home</div>
      <Heart />
    </Main>
  );
};

export default Index;
