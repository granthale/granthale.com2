import Head from "next/head";

interface Props {
  page: string;
}

const Header = ({ page }: Props) => {
  const title = page === "home" ? "grant hale" : `${page} | grant hale`;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="twitter:card"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/dot.png`}
      />
      <meta name="description" content="All about grant!" key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="All about grant!" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/dot.png`}
      />
    </Head>
  );
};

export default Header;
