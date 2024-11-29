import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageMyPost = () => {
    const { user } = useAuth();
    const [organizers, setOrganizers] = useState([]);

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/organizers/${user?.email}`)
        console.log(data);
        setOrganizers(data);
    }

    console.log(organizers);
    return (
        <div className="py-8 text-center">
            <h2 className="text-4xl font-abril text-gray-600 mb-6">Here Manage My All Volunteer Need Post</h2>
            {
                organizers.length === 0 ? (
                    <p className="text-2xl font-abril text-orange-600 mb-6">No post found</p>
                ) :
                    (
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
                                                                <div class="inline-flex items-center gap-x-3">
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
                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div className="flex items-center gap-x-6">
                                                                    <button className="text-gray-500 
                                                                    transition-colors duration-200
                                                                     dark:hover:text-red-500
                                                                      dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth="1.5"
                                                                            stroke="currentColor"
                                                                            className="w-5 h-5">
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                        </svg>
                                                                    </button>

                                                                    <Link to={`/updatePost/${organizer._id}`}
                                                                    className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth="1.5"
                                                                            stroke="currentColor"
                                                                            className="w-5 h-5">
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                        </svg>
                                                                    </Link>
                                                                </div>
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

export default ManageMyPost;