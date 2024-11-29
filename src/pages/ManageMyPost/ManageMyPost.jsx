import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const ManageMyPost = () => {
    const { user } = useAuth();
    const [organizers, setOrganizers] = useState([]);

    useEffect(() => {
        const getData = async () => {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/organizers/${user?.email}`)
                console.log(data);
                setOrganizers(data);
             
        }
       getData()
    }, [])

    console.log(organizers);
    return (
        <div>
           <h2 className="text-4xl font-abril text-gray-600 mb-6">Here Manage My All Volunteer Need Post</h2>
           {
             organizers.length === 0 ? (
                <p>No post found</p>
             ) :
             (
                <h2>My Post has : {organizers.length}</h2>
             )
           }
        </div>
    );
};

export default ManageMyPost;