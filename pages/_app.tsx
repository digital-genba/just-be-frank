import * as React from 'react';
import App, { Container } from 'next/app';
import '../styles/main.scss';

class JustBeFrank extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default JustBeFrank;
