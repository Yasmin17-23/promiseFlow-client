import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const UpdatePost = () => {
    const { user } = useAuth();
    const organizer = useLoaderData();
    const { _id, thumbnail, postTitle, category, deadline, description,
        no_of_Volunteers, location, organizerInfo } = organizer;
    const [startDate, setStartDate] = useState(new Date());

    const handleUpdatePost = async e => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const postTitle = form.postTitle.value;
        const category = form.category.value;
        const location = form.location.value;
        const email = form.email.value;
        const no_of_Volunteers = form.no_of_Volunteers.value;
        const deadline = startDate;
        const description = form.description.value;
        const organizerData = {
            thumbnail,
            postTitle,
            category,
            location,
            no_of_Volunteers,
            deadline,
            description,
            owner: {
                email,
                name: user?.displayName,
            },
        }
        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/organizer/${_id}`, 
                 organizerData
            )
            console.log(data);
            toast.success('Volunter Data Update Successfully');
          
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
            
        }
        //e.target.reset();
    }

    return (
        <div className="flex flex-col justify-center items-center text-center my-8">
            <div className="py-5">
                <h2 className="text-4xl font-abril text-gray-600 mb-3">Update Your Volunteer Post</h2>
                <p className="text-gray-600/50">We need best volunteer for this we want to update
                    volunteer post part.</p>
            </div>
            <form onSubmit={handleUpdatePost}>
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
                        <input id="postTitle" type="text" name="postTitle"
                            defaultValue={postTitle}
                            className="block w-full px-4 py-2 mt-2
             text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
              dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
              focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="category ">
                            Category
                        </label>
                        <input id="category" type="text" name="category"
                           defaultValue={category}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 
            bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
             dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
              dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="location">
                            Location
                        </label>
                        <input id="location" type="text" name="location"
                        defaultValue={location}
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
                        <DatePicker className="border px-4 py-2 text-end"
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
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="description">
                        Description
                    </label>
                    <input id="description" type="text" name="description"
                        defaultValue={description}
                        className="block w-full px-4 py-2 mt-2 
            text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
             dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
             focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2.5 leading-5 font-bold text-white transition-colors duration-300 
        transform bg-orange-300 rounded-md hover:bg-orange-600 focus:outline-none
         focus:bg-gray-600">UPDATE POST</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePost;