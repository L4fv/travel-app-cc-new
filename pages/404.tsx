import Head from "next/head";
import { Layout } from "../components/shared/Layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Travel App - Página no encontrada</title>
      </Head>
      <div className="px-8 py-12  max-w-6xl mx-auto">
        <h1 className="text-center text-xl font-bold">Página no encontrada</h1>
      </div>
    </Layout>
  );
}
