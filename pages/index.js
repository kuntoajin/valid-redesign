import Head from "next/head";
import HomeMobile from "../src/components/mobile/pages/home";
import Home from "../src/components/pages/home";

const Index = () => {
  return (
    <>
      <Head>
        <title>Berita Terbaru Berbasis Data, Berita Terkini - Validnews</title>
        <meta
          name="description"
          content="Berita Terbaru Berbasis Data, Berita Terkini"
        />
      </Head>
      <Home />
      {/* <HomeMobile /> */}
    </>
  );
};

export default Index;
