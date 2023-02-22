import Link from 'next/link';
import type { ReactNode } from 'react';

import Footer from '@/components/common/Footer/Footer';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h4 className="text-xl">{AppConfig.description}</h4>
        </div>
        <nav>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/zones/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Zones
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/locations/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Locations
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Blog
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/contact/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
