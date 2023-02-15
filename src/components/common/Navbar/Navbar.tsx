import { Searchbar, UserNav } from '@components/common';
import { Container, Logo } from '@components/ui';
import Link from 'next/link';
import type { FC } from 'react';

import s from './Navbar.module.css';
import NavbarRoot from './NavbarRoot';

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="max-w-8xl mx-auto px-6">
      <div className={s.nav}>
        <div className="flex flex-1 items-center">
          <Link href="/" className={s.logo} aria-label="Logo">
            <Logo />
          </Link>
          <nav className={s.navMenu}>
            <Link href="/search" className={s.link}>
              All
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href} className={s.link}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="hidden flex-1 justify-center lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex flex-1 items-center justify-end space-x-8">
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:hidden lg:px-6">
          <Searchbar id="mobile-search" />
        </div>
      )}
    </Container>
  </NavbarRoot>
);

export default Navbar;
