import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Hero from "../../components/Hero/Hero";
import NewsLater from "../../components/NewsLater/NewsLater";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Skill Bee | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Hero></Hero>
            <NewsLater></NewsLater>

        </div>
    );
};

export default Home;