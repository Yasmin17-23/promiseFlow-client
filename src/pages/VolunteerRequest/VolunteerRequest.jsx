import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";


const VolunteerRequest = () => {
    const { user } = useAuth();
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/volunteer-requsets/${user?.email}`)
        console.log(data);
        setVolunteers(data)
    }
    
    console.log(volunteers);

    const handleCancelRequest = async id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
              if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(
                        `${import.meta.env.VITE_API_URL}/volunteer/${id}`
                    )
                    Swal.fire({
                        title: "Deleted!",
                         text: "Your file has been deleted.",
                         icon: "success"
                        });
                    
                    //Refresh data after a successfully deleted data
                    getData()
                }
                catch (err) {
                    console.log(err);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
                }
             
           }
          });
    }
    return (
        <div className="py-8 text-center">
        <h2 className="text-2xl md:text-4xl font-abril text-gray-600 mb-6">Here  My All Volunteer Request Post</h2>
        {
            volunteers.length === 0 ? (
                <p className="text-xl md:text-2xl font-abril text-orange-600 mb-6">No Volunteer Request post found</p>
            ) :
                (
                    <div className="flex flex-col mt-6">
                        <h2 className="py-3 text-orange-400/50 lg:text-xl font-bold">My Post :
                            {volunteers.length} Request</h2>
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
                            rtl:text-right text-gray-500 dark:text-gray-400">Status</th>
                                               
                                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left 
                            rtl:text-right text-gray-500 dark:text-gray-400">Edit</th>



                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                volunteers.map(volunteer => (
                                                    <tr key={volunteer._id}>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">
                                                                <div className="flex items-center  gap-x-2">
                                                                    <img className="object-cover w-10 h-10 
                                                        rounded-full"
                                                                        src={volunteer.thumbnail} alt="" />
                                                                    <div>
                                                                        <h2 className="font-medium text-gray-800
                                                                 dark:text-white ">
                                                                            {volunteer.postTitle}
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
                                                                        ${volunteer.category === 'Healthcare' &&
                                                                        'text-blue-500 bg-blue-100/60'
                                                                        } ${volunteer.category === 'Animal Welfare' &&
                                                                        'text-emerald-500 bg-emerald-100/60'
                                                                        } ${volunteer.category === 'Social Service' &&
                                                                        'text-rose-500 bg-rose-100/60'
                                                                        } ${volunteer.category === 'Education' &&
                                                                        'text-orange-500 bg-orange-100/60'
                                                                        }
                                                                         text-xs  rounded-full`}
                                                                >
                                                                    {volunteer.category}
                                                                </p>
                                                            </div>

                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500
                                                 dark:text-gray-300 whitespace-nowrap">
                                                            {new Date(volunteer.deadline).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500
                                                 dark:text-gray-300 whitespace-nowrap">
                                                            {volunteer.no_of_Volunteers}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm 
                                                        whitespace-nowra ">
                                                            <p className="bg-green-200/60 
                                                            text-emerald-500 px-2 py-1 rounded-xl">{volunteer.status}</p>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <button onClick={() => 
                                                                    handleCancelRequest(volunteer._id)
                                                                }
                                                                className="text-xl" 
                                                                  >
                                                                   <RxCrossCircled  className="text-gray-500 
                                                                transition-colors duration-200
                                                                 dark:hover:text-red-500
                                                                  dark:text-gray-300 hover:text-red-500 focus:outline-none"/>
                                                                </button>

                                                              
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

export default VolunteerRequest;