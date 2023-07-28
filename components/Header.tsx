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
      <meta name="twitter:site" content="grant__hale" />
      <meta name="twitter:title" content="grant hale" />
      <meta
        name="twitter:description"
        content="grant hale is a guy to get to know."
      />
      <meta
        name="twitter:image"
        content="http://www.granthale.com/thumbnail.png"
      />
    </Head>
  );
};

export default Header;
