import Head from "next/head";
import Layout from "../components/layout";
import '../styles/global.css';
import Link from "next/link";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <Link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
    </Head>
    <Layout>
      <main className="">
        <Component {...pageProps} />
      </main>
    </Layout>
  </>
);

export default MyApp;