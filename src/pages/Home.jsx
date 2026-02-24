import StaticSlider from "../components/StaticSlider";
import FeaturedMovies from "../components/FeaturedMovies";
const Home = () => {
  return (
    <div>
      <section>
        <StaticSlider></StaticSlider>
      </section>
      <section>
        <FeaturedMovies></FeaturedMovies>
      </section>
    </div>
  );
};

export default Home;
