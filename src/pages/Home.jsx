import Banner from "../components/Banner";
import FeaturedMovies from "../components/FeaturedMovies";
const Home = () => {
  return (
    <div>
      <section className="mb-6 lg:mb-12">
        <Banner></Banner>
      </section>
      <section>
        <FeaturedMovies></FeaturedMovies>
      </section>
    </div>
  );
};

export default Home;
