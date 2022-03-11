import Head from "next/head";
import { config } from "../config";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{config.name}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
