import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "The Frontier is Calling | Frontier Kitchen",
    robots: "index, follow",
    description: "",
  };
}

const Home = () => {
  return <div>The frontier is calling</div>;
};

export default Home;
