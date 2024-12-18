import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import PageTitle from "../../components/PageTitle/PageTitle";


const BeVolunteer = () => {
    const { user } = useAuth();
    const organizer = useLoaderData();
    const { _id, thumbnail, postTitle, category, deadline, description,
        no_of_Volunteers, location, owner } = organizer;

    const [startDate, setStartDate] = useState(new Date(deadline) || new Date());
   
    const handleRequest = async e => {
      e.preventDefault();
      const form = e.target;
      const volunteerId = _id;
      const email = user?.email;
      const name = form.name.value;
      const suggestion = form.suggestion.value;
      const status = 'Requested';
      const volunteerData = {
         volunteerId,
         email,
         name,
         suggestion,
         status,
         thumbnail, 
         postTitle, 
         category, 
         deadline, 
         description,
        no_of_Volunteers, 
        location, 
        owner

      }
       try{
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/volunteer`,
              volunteerData
            )
          console.log(data);
          toast.success('Volunteer Requested Successfully');
       }
       catch (err){
         console.log(err);
         toast.success(err.response.data);
       }
       
   }
    return (
        <div className="flex flex-col justify-center items-center text-center my-8">
        <PageTitle title="Be Volunteer Page"></PageTitle>
        <div className="py-5">
            <h2 className="text-4xl font-abril text-gray-600 mb-3">Be A Volunteer Post</h2>
            <p className="text-gray-600/50">I want to be a volunteer for this I request this
                volunteer post part.</p>
        </div>
        <form onSubmit={handleRequest}>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
                <div className="flex flex-col">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="thumbnail">
                        Thumbnail
                    </label>
                    <input id="thumbnail" type="text" name="thumbnail"
                    defaultValue={thumbnail}
                        className="block w-full px-4 py-2 mt-2 text-gray-700
             bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
              dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
              focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="postTitle">
                        Post Title
                    </label>
                    <input id="postTitle" type="text" name="postTitle" defaultValue={postTitle}
                        className="block w-full px-4 py-2 mt-2
             text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
              dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
              focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="category ">
                        Category
                    </label>
                    <input id="category" type="text" name="category" defaultValue={category}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 
            bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
             dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
              dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="location">
                        Location
                    </label>
                    <input id="location" type="text" name="location" defaultValue={location}
                        className="block w-full px-4 py-2 mt-2 
            text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
             dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
             focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
                <div className="flex flex-col justify-center">
                    <label className="text-gray-700 dark:text-gray-200">
                        Deadline
                    </label>
                   
                    {/* Date picker Input Field */}
                    <DatePicker  className="border px-4 py-2 text-end"
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} />
                    
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="no_of_Volunteers">
                        No Of Volunteers
                    </label>
                    <input id="no_of_Volunteers" type="number" name="no_of_Volunteers"
                       defaultValue={no_of_Volunteers}
                        className="block w-full px-4 py-2 mt-2 
            text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
             dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
             focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="name">
                        Organizer Name
                    </label>
                    <input id="name" type="text" name="name"
                    disabled
                    defaultValue={user?.displayName}
                        className="block w-full px-4 py-2 mt-2 
            text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
             dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
             focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="email">
                        Organizer Email
                    </label>
                    <input id="email" type="email" name="email"
                    disabled
                    defaultValue={user?.email}
                        className="block w-full px-4 py-2 mt-2 
            text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
             dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
             focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
            </div>
            <div className="my-3">
                <label className="text-gray-700 dark:text-gray-200" htmlFor="description">
                    Description
                </label>
                <input id="description" type="text" name="description" defaultValue={description}
                    className="block w-full px-4 py-2 mt-2 
            text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
             dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
             focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div className="my-3">
                <label className="text-gray-700 dark:text-gray-200" htmlFor="suggestion">
                    Suggestion
                </label>
                <input id="suggestion" type="text" name="suggestion" 
                    className="block w-full px-4 py-2 mt-2 
            text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
             dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
             focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div className="flex justify-center mt-6">
                <button className="px-8 py-2.5 leading-5 font-bold text-white transition-colors duration-300 
        transform bg-orange-300 rounded-md hover:bg-orange-600 focus:outline-none uppercase
         focus:bg-gray-600">Request</button>
            </div>
        </form>
    </div>
    );
};

export default BeVolunteer;