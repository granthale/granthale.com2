import Head from "next/head";

interface Props {
  page: string;
}

const Header = ({ page }: Props) => {
  const title = page === "home" ? "grant hale" : `${page} | grant hale`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@grant__hale" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Get to know him!"
      />
      <meta
        name="twitter:image"
        content="https://www.granthale.com/thumbnail.jpg"
      />

      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Get to know him!"
      />
      <meta property="og:url" content="https://www.granthale.com" />
      <meta
        property="og:image"
        content="https://www.granthale.com/thumbnail.png"
      />
    </Head>
  );
};

export default Header;
