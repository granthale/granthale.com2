import "../dist/output.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Montserrat } from "next/font/google"

const font = Montserrat({
  subsets: [],
  weight: ['300', '400', '500', '600'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
