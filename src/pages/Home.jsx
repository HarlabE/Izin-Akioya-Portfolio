import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import Commercial from "../components/commercial";
import Entrepreneurship from "../components/entrepreneurship";
import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/intro-text";
import Number from "../components/number";
import Social from "../components/social";
import Leadership from "../components/thought-leadership";
import Wanderlust from "../components/wanderlust";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Number />
      <Entrepreneurship />
      <Wanderlust />
      <Commercial />
      <Leadership />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
