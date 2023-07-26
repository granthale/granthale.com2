import Head from 'next/head'
import Link from 'next/link'

const name = 'grant hale'
export const siteTitle = 'grant hale'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kindle your curiosity" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <h1 className="m-4 text-primary font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
              {name}
            </h1>
          </>
        ) : (
          <>
            <h1 className="m-4 text-slate-500 font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
              {name}
            </h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-primary">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}