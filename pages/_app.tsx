import "../dist/output.css";

import { Alegreya } from "next/font/google";
const alegreya = Alegreya({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={alegreya.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
