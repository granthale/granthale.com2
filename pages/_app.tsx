import "../dist/output.css";

import { Roboto_Mono } from "next/font/google";
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoMono.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
