import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import Testimonial from "../../components/testimonials/Testimonial";
import Track from "../../components/track/Track";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
      <Loader />
    </Layout>
  );
};

export default Home;
