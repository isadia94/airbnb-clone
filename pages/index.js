import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title className="font-poppins">Bonfire</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-medium font-poppins">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-poppins font-medium py-8">
            Live Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map((card) => (
              <MediumCard key={card.img} img={card.img} title={card.title} />
            ))}
          </div>
        </section>
        <div className="mt-8">
          <LargeCard
            img="http://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wish Lists curated by AirBnB"
            buttonText="Get Inspired"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("http://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
