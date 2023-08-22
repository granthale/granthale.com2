import "../dist/output.css";
// import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

const font = {
  subsets: ["latin"],
  display: "swap",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.display}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
