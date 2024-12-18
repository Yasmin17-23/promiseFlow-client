import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import PageTitle from "../../components/PageTitle/PageTitle";

const AddVolunteerPost = () => {
    const { user } = useAuth();
    const [startDate, setStartDate] = useState(new Date());

    const handleAddVolunteer = async e => {
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
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/organizer`, 
                 organizerData   
            )
            console.log(data);
            toast.success('Volunter Data Added Successfully');
          
        } catch (err) {
            console.log(err);
            
        }
        e.target.reset();
    }
    return (
        <div className="flex flex-col justify-center items-center text-center my-8">
            <PageTitle title="Add Volunteer Post Page"></PageTitle>
            <div className="py-5">
                <h2 className="text-4xl font-abril text-gray-600 mb-3">Add Your Volunteer Post</h2>
                <p className="text-gray-600/50">We need best volunteer for this we created add
                    volunteer post part.</p>
            </div>
            <form onSubmit={handleAddVolunteer}>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2">
                    <div className="flex flex-col">
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="thumbnail">
                            Thumbnail
                        </label>
                        <input id="thumbnail" type="text" name="thumbnail"
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
                        defaultValue={user?.name}
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
                        className="block w-full px-4 py-2 mt-2 
                text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800
                 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
                 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2.5 leading-5 font-bold text-white transition-colors duration-300 
            transform bg-orange-300 rounded-md hover:bg-orange-600 focus:outline-none
             focus:bg-gray-600">ADD POST</button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteerPost;