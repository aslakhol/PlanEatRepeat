import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { Button } from "../components/ui/button";

export default function Home() {
  const tagQuery = api.dinner.tags.useQuery();
  const dinnerQuery = api.dinner.dinners.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <p>
          {dinnerQuery.data
            ? dinnerQuery.data.dinners.map((dinner) => (
                <p key={dinner.id}> {dinner.name}</p>
              ))
            : "Error loading dinner"}
        </p>
        <Button>alksjdlksj</Button>

        <p className="text-2xl text-white">
          {tagQuery.data
            ? tagQuery.data.tags.map((tag) => (
                <p key={tag.value}>{tag.value}</p>
              ))
            : "Error loading tag"}
        </p>
      </main>
    </>
  );
}
