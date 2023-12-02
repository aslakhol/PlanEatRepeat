import Head from "next/head";
import { WeekView } from "../views/WeekPlan/WeekView";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sulten</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeekView />
    </>
  );
}
