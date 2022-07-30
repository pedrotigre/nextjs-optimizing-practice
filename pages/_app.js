import Layout from '../components/layout/layout';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* This will be merged with all other Head elements. And when we have
        duplicated elements (that are in conflict, e.g. two titles), only the last one will remain. */}
        <title>Next.js Events</title>
        <meta name="description" content="Next.js Events" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
