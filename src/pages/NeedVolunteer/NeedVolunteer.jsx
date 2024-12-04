import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../../components/VolunteerCard/VolunteerCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTable } from "react-icons/fa6";



const NeedVolunteer = () => {
    const [organizers, setOrganizers] = useState([]);
    const [search, setSearch] = useState('');
    const [isCard, setIsCard] = useState(true);


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


           <div className="flex justify-end">
              <button onClick={() => setIsCard(!isCard)} className="px-8 py-8">
                <GiHamburgerMenu className="text-2xl text-orange-800"></GiHamburgerMenu>
              </button>
           </div>

            {
                isCard ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-8">
                        {
                            organizers.map(oraganizer => (
                                <VolunteerCard key={oraganizer._id} oraganizer={oraganizer}></VolunteerCard>
                            ))
                        }
                    </div>
                     ) : (
                        <div className="flex flex-col mt-6">
                        <h2 className="py-3 text-orange-400/50 lg:text-xl font-bold">My Post :
                            {organizers.length} </h2>
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left 
                            rtl:text-right text-gray-500 dark:text-gray-400">Post Title</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left 
                            rtl:text-right text-gray-500 dark:text-gray-400">Category</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left 
                            rtl:text-right text-gray-500 dark:text-gray-400">Deadline</th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left 
                            rtl:text-right text-gray-500 dark:text-gray-400">No Of Volunteers</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left 
                            rtl:text-right text-gray-500 dark:text-gray-400">Description</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left 
                            rtl:text-right text-gray-500 dark:text-gray-400">Edit</th>



                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                organizers.map(organizer => (
                                                    <tr key={organizer._id}>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">
                                                                <div className="flex items-center  gap-x-2">
                                                                    <img className="object-cover w-10 h-10 
                                                        rounded-full"
                                                                        src={organizer.thumbnail} alt="" />
                                                                    <div>
                                                                        <h2 className="font-medium text-gray-800
                                                                 dark:text-white ">
                                                                            {organizer.postTitle}
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium
                                                 text-gray-700 whitespace-nowrap">

                                                            <div className='flex items-center gap-x-2'>
                                                                <p
                                                                    className={`px-5 py-2 
                                                                        ${organizer.category === 'Healthcare' &&
                                                                        'text-blue-500 bg-blue-100/60'
                                                                        } ${organizer.category === 'Animal Welfare' &&
                                                                        'text-emerald-500 bg-emerald-100/60'
                                                                        } ${organizer.category === 'Social Service' &&
                                                                        'text-rose-500 bg-rose-100/60'
                                                                        } ${organizer.category === 'Education' &&
                                                                        'text-orange-500 bg-orange-100/60'
                                                                        }
                                                                         text-xs  rounded-full`}
                                                                >
                                                                    {organizer.category}
                                                                </p>
                                                            </div>

                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500
                                                 dark:text-gray-300 whitespace-nowrap">
                                                            {new Date(organizer.deadline).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500
                                                 dark:text-gray-300 whitespace-nowrap">
                                                            {organizer.no_of_Volunteers}
                                                        </td>
                                                        <td title={organizer.description}
                                                            className="px-4 py-4 text-sm whitespace-nowrap">
                                                            {organizer.description.substring(0, 16)}...
                                                        </td>
                                                       
                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                     )
                    }

        </div>

    );
};

export default NeedVolunteer;