import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const Head = ({
  title,
  description,
  url,
  ogImage,
}: HeadProps): JSX.Element => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || 'Just be Frank'}</title>
    <meta
      name="description"
      content={description || 'A catalogue of music by Frank Sinatra.'}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={url || 'URL'} />
    <meta property="og:title" content={title || 'Just Be Frank'} />
    <meta
      property="og:description"
      content="A ctalogue of music by Frank Sinatra."
    />
    <meta name="twitter:site" content={url || 'URL'} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || ''} />
    <meta property="og:image" content={ogImage || ''} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
