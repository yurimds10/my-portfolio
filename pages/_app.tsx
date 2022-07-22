import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../src/utils/queryClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
