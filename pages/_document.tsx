import Document, { Html, Head, Main, NextScript } from "next/document";

import { config } from "../config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href={config.font.url} />
          <link rel="icon" href={config.assetImg(config.images.icon)} />
        </Head>
        <body className="bg-secondary bg-opacity-5">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
