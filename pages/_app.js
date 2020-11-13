import Head from "next/head"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Countdown: Days until...</title>
        <meta property="og:title" content="Countdown" key="title" />
        <link rel="short icon" href="/favicon192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
