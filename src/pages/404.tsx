import { Layout } from '@components/common';
import type { GetStaticPropsContext } from 'next';

import { Text } from '@/components/ui/Text';

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales };
  const { pages } = await commerce.getAllPages({ config, preview });
  const { categories, brands } = await commerce.getSiteInfo({
    config,
    preview,
  });
  return {
    props: {
      pages,
      categories,
      brands,
    },
    revalidate: 200,
  };
}

export default function NotFound() {
  return (
    <div className="fit mx-8 flex max-w-2xl flex-col items-center justify-center py-20 sm:mx-auto">
      <Text variant="heading">Not Found</Text>
      <Text className="">
        The requested page doesn't exist or you don't have access to it.
      </Text>
    </div>
  );
}

NotFound.Layout = Layout;
