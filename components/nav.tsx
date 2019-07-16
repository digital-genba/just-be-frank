import React from 'react';
import Link from 'next/link';

const Nav = (): JSX.Element => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        <li>
          <Link href="/">
            <a>Link</a>
          </Link>
        </li>
      </ul>
    </ul>
  </nav>
);

export default Nav;
