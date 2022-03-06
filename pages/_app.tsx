import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from 'components/Layout';
import { IconContext } from 'react-icons';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider
      value={{
        className: 'text-2xl text-gray-500',
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}

export default MyApp;
