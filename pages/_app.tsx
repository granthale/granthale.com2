import "../dist/output.css";

import { Alegreya_Sans } from "next/font/google";
const font = {
  subsets: ["latin"],
  display: "swap",
};
import { ThemeProvider } from "next-themes";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.display}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
