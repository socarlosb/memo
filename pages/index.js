import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Memo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <img src="./logo.svg"></img>
          <h1>Memo</h1>
        </header>
      </main>

      <footer>2020</footer>
    </div>
  );
}
