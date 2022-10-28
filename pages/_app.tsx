import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/beople.css';
import '../styles/style.css';
import '../styles/responsive.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BEOPLE</title>
        <link rel='icon' href='/Logo.svg' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
