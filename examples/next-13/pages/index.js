import Head from "next/head";
import Link from "next/link";

const Index = () => (
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <h1>Next.js + PWA = AWESOME!</h1>
    <Link href="/about">About</Link>
  </>
);

export default Index;
