import { Head } from "next/document";

export default function Custom404() {
  <Head>
    <title>404</title>
  </Head>;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center">
        <p className="text-4xl text-neon-green">
          404 - Page Not Found
        </p>
      </div>
    </div>
  );
}
