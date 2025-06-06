import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Roboto } from 'next/font/google';
import GlobalStyle from '@/styles/GlobalStyle';
import {theme} from "@/styles/Theme";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700', '800'],
  variable: '--font-roboto',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main className={roboto.variable}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}