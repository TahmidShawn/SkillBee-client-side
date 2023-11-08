import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Skill Bee | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>

        </div>
    );
};

export default Home;