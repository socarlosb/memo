import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Memo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <header className={styles.flex}>
          <img src="./logo.svg"></img>
          <h1>Memo</h1>
        </header>
      </main>

      <footer className="footer">2020</footer>
    </div>
  );
}
