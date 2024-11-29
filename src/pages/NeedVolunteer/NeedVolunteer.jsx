import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../../components/VolunteerCard/VolunteerCard";



const NeedVolunteer = () => {
    const [organizers, setOrganizers] = useState([]);

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
            <h2 className="text-4xl font-abril text-gray-600 mb-6">Needs All Volunteers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    organizers.map(oraganizer => (
                        <VolunteerCard key={oraganizer._id} oraganizer={oraganizer}></VolunteerCard>
                    ))
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;