import Head from "next/head";

interface Props {
  page: string;
}

const Header = ({ page }: Props) => {
  const title = page === "home" ? "grant hale" : `${page}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Grant's bustling internet cafe."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@grant__hale" />
      <meta name="twitter:image:type" content="image/jpeg" />
      <meta
        name="twitter:image:secure_url"
        content="https://www.granthale.com/images/man_earth.jpeg"
      />
      <meta
        name="twitter:image"
        content="https://www.granthale.com/images/man_earth.jpeg"
      />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://www.granthale.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.granthale.com/images/man_earth.jpeg"
      />
      <meta property="og:image:alt" content="grant hale" />
      <meta
        property="og:image:secure_url"
        content="https://www.granthale.com/images/man_earth.jpeg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:description"
        content="Grant's bustling internet cafe."
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Grant's RSS feed"
        href="/rss.xml"
      />
    </Head>
  );
};

export default Header;
