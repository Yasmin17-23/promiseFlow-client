
import Banner from "../../components/Banner/Banner";
import FamousWork from "../../components/FamousWork/FamousWork";
import FeedBack from "../../components/FeedBack/FeedBack";
import PageTitle from "../../components/PageTitle/PageTitle";
import VolunteerNeed from "../../components/VolunteerNeed/VolunteerNeed";

const Home = () => {
    return (
        <div>
            <PageTitle title="PromiseFlow - Home Page"></PageTitle>
           <Banner></Banner>
           <VolunteerNeed></VolunteerNeed>
           <FamousWork></FamousWork>
           <FeedBack></FeedBack>
        </div>
    );
};

export default Home;