import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../VolunteerCard/VolunteerCard";
import { Link } from "react-router-dom";


const VolunteerNeed = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/volunteer`)
            console.log(data)
            setVolunteers(data);
        }
        getData()
    }, [])
    return (
        <div className="py-6 text-center">
            <h2 className="text-4xl font-abril text-gray-600 mb-6">Volunteer Needs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    volunteers.map(volunteer => (
                        <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>
                    ))
                }
            </div>
            <Link to="/need-volunteer">
                <button className="px-8 py-2 font-bold tracking-wide text-white uppercase
                 transition-colors duration-300 transform bg-orange-200 rounded-lg
                  hover:bg-orange-300 focus:outline-none focus:ring focus:ring-blue-300 
                  focus:ring-opacity-80">
                    See All
                </button>
            </Link>
        </div>
    );
};

export default VolunteerNeed;