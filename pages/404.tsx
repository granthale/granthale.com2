import { Head } from "next/document";
import { useRouter } from "next/router";

export default function Custom404() {
  <Head>
    <title>404</title>
  </Head>;

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center">
        <p className="text-4xl text-neon-green">404 - Page Not Found</p>
        <button
          onClick={goBack}
          className="mt-4 bg-neon-green text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
