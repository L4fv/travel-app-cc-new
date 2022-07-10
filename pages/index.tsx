import { Layout } from "../components/shared/Layout";
import { HomePortrait } from "../components/home/HomePortrait";
import { HomeMain } from "../components/home/HomeMain";
import { HomeExperience } from "../components/home/HomeExperience";
import { fetchTourPackages, useTourPackages } from "../hooks/useTourPackages";

export default function Home({ tourPackages }) {
  useTourPackages(tourPackages);

  return (
    <Layout>
      <div className="divState">
        <HomePortrait />
        <HomeMain />
        <HomeExperience />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let tourPackages;

  try {
    tourPackages = await fetchTourPackages();
  } catch (error) {
    tourPackages = [];
  }

  return { props: { tourPackages }, revalidate: 10 };
}
