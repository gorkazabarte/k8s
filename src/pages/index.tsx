import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["hello", { text: "from tRPC" }]);

  return (
    <Head>
      <h1>
        Gorka Zabarte's blog
      </h1>
      <body>
        <div> Context: </div>
        <li> Python </li>
        <li> Books </li>
      </body>
    </Head>
  );
};

export default Home;
