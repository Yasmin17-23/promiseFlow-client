import { Link, useLoaderData } from "react-router-dom";
import { MdSubtitles } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";



const NeedVolunteerPost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const organizer = useLoaderData();
    const { user } = useAuth();
    console.log(organizer)
    const { _id, thumbnail, postTitle, category, deadline, description,
        no_of_Volunteers, location, owner } = organizer;

    return (
        <div className="my-10 text-center">
            <h2 className="text-4xl font-abril text-orange-900 mb-5">Need Volunteer Post Details</h2>

            <div className="bg-white dark:bg-gray-900">


                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide font-abril
                             text-gray-800 dark:text-white lg:text-4xl">
                                {postTitle}
                            </h1>

                            <div className="mt-8 space-y-5">
                                <div className="flex flex-col items-start mr-2 text-gray-700 dark:text-gray-200">
                                   
                                   <p className='mt-2 text-md font-semibold  text-gray-600 '>
                                        Organizer Name: {user?.displayName}
                                    </p>
                                    <p className='mt-2 text-md font-semibold text-gray-600 '>
                                        Organizer Email: {user?.email}
                                    </p>
                                </div>
                                <div className="flex items-center mr-2 text-gray-700 dark:text-gray-200">
                                    <MdOutlineDateRange className="text-xl  mr-2 text-orange-800" />
                                    <span className="mr-2 font-semibold text-orange-950/50">Deadline:
                                        {/* Date picker Input Field */}
                                        <DatePicker className="border py-2 text-center ml-2"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)} />
                                    </span>
                                </div>
                                <div className="flex items-center mr-2 text-gray-700 dark:text-gray-200">
                                    <MdSubtitles className="text-xl  mr-2 text-orange-800" />
                                    <h4 className="mr-2 font-semibold text-orange-950/50">Category: 
                                        <span className="ml-2 font-medium text-gray-600">{category}</span>
                                    </h4>
                                </div>
                                <div className="flex items-center mr-2 text-gray-700 dark:text-gray-200">
                                    <IoLocationSharp className="text-xl  mr-2 text-orange-800" />
                                    <h4 className="mr-2 font-semibold text-orange-950/50">Location: 
                                        <span className="ml-2 font-medium text-gray-600"> {location}</span>
                                    </h4>
                                </div>
                                <div className="flex items-center mr-2 text-gray-700 dark:text-gray-200">
                                    <LiaPeopleCarrySolid className="text-xl  mr-2 text-orange-800" />
                                    <h4 className="mr-2 font-semibold text-orange-950/50">No Of Volunteer: 
                                        <span className="ml-2 font-medium text-gray-600"> {no_of_Volunteers}</span>
                                    </h4>
                                </div>
                                <div className="flex items-center mr-2 text-gray-700 dark:text-gray-200">
                                    <TbListDetails className="text-xl  mr-1 text-orange-800" />
                                    <h4 className="mr-2 font-semibold text-orange-950/50">Description: 
                                     <span className="ml-2 text-md font-medium text-gray-600"> {description}</span>
                                    </h4>  
                                </div>


                            </div>
                        </div>

                       
                           <div className="mt-8">
                           <Link to={`/beVolunteer/${_id}`}>
                           <button type="button" className="h-10 px-4 py-2 m-1 text-white 
                                transition-colors duration-300 uppercase transform bg-orange-300 rounded-md
                                 hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
                                Be a Volunteer
                            </button>
                           </Link>
                           </div>
                       
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                            src={thumbnail}
                            alt="glasses photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteerPost;