import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../VolunteerCard/VolunteerCard";
import { Link } from "react-router-dom";


const VolunteerNeed = () => {
    const [organizers, setOrganizers] = useState([]);
    const [itemsLength, setItemsLength] = useState(6);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/organizers`)
            console.log(data)
            setOrganizers(data);
        }
        getData()
    }, [])
    return (
        <div className="py-6 text-center">
            <h2 className="text-4xl font-abril text-gray-600 mb-6">Volunteer Needs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    organizers.slice(0, itemsLength).map(oraganizer => (
                        <VolunteerCard key={oraganizer._id} oraganizer={oraganizer}></VolunteerCard>
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