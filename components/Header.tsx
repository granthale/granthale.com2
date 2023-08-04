import Head from "next/head";

interface Props {
  page: string;
}

const Header = ({ page }: Props) => {
  const title = page === "home" ? "grant hale" : `${page} | grant hale`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:site" content="@" />
      <meta name="twitter:creator" content="@" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="Get to know him!" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:type" content="image/png" />
      <meta
        name="twitter:image:secure_url"
        content="https://www.granthale.com/images/dot.png"
      />
      <meta
        name="twitter:image"
        content="https://www.granthale.com/images/dot.png"
      />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://www.granthale.com" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://www.granthale.com/images/dot.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.granthale.com/images/dot.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:description" content="Get to know him!" />
    </Head>
  );
};

export default Header;
