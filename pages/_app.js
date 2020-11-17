import React from "react";
import Head from "next/head";

import "./_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo&family=Josefin+Sans&family=Monoton&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
