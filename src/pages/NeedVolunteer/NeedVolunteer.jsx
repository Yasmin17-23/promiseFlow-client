import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../../components/VolunteerCard/VolunteerCard";
import PageTitle from "../../components/PageTitle/PageTitle";



const NeedVolunteer = () => {
    const [organizers, setOrganizers] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL}/all-organizers?search=${search}`)
            console.log(data)
            setOrganizers(data);
        }
        getData()
    }, [search])

  
    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value.trim();
        setSearch(text)
    }

    return (
        <div className="py-6 text-center">
            <PageTitle title="Need Volunteer Page"></PageTitle>
            <h2 className="text-4xl font-abril text-gray-600 mb-6 ">Needs All Volunteers</h2>

            <div className="flex  items-center justify-end pb-6 md:py-0 md:px-4">
                <form onSubmit={handleSearch}>
                    <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                        <input
                            className="px-6 py-2 text-gray-700 placeholder-gray-500
                         bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 
                         focus:placeholder-transparent dark:focus:placeholder-transparent"
                            type="text" name="search"
                            placeholder="Enter Post Title"
                            aria-label="Enter Post Title" />

                        <button className="px-4 py-3 text-sm font-medium tracking-wider text-orange-500 
                        uppercase transition-colors duration-300 transform bg-orange-200/60 rounded-md
                         hover:bg-gray-600 focus:bg-orange-300/60 focus:outline-none">Search
                         </button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-8">
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