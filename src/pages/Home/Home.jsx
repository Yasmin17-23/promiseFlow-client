
import Banner from "../../components/Banner/Banner";
import PageTitle from "../../components/PageTitle/PageTitle";
import VolunteerNeed from "../../components/VolunteerNeed/VolunteerNeed";

const Home = () => {
    return (
        <div>
            <PageTitle title="PromiseFlow - Home Page"></PageTitle>
           <Banner></Banner>
           <VolunteerNeed></VolunteerNeed>
        </div>
    );
};

export default Home;