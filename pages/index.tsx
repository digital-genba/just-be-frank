import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

const Home = (): JSX.Element => (
  <div>
    <Head title="Just Be Frank" />
    <Nav />

    <div className="hero">
      <h1 className="title">Just Be Frank</h1>
      <p className="description">
        To get started, edit pages/index.js and save to reload.
      </p>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a href="/" className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a href="/" className="card">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates
            </p>
          </a>
        </Link>
        <Link href="https://github.com/segmentio/create-next-app">
          <a href="/" className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
