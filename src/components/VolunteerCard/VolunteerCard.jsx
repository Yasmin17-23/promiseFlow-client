import { Link } from "react-router-dom";


const VolunteerCard = ({ volunteer }) => { 
    const { _id, thumbnail, postTitle, category,  deadline } = volunteer;

    return (
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-8">
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-red-800/70 uppercase dark:text-white">{category}</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{postTitle}</p>
            </div>

            <img className="object-cover w-full h-48 mt-2"
                src={thumbnail} alt="NIKE AIR" />

            <div className="flex flex-col items-center justify-center px-4 py-2 bg-gray-900">
                <h1 className="text-md font-bold text-white mb-3">Deadline: {deadline}</h1>
               <Link to={`/volunteerDetails/${_id}`}>
               <button className="px-4 py-2 text-sm font-semibold text-gray-900 
                uppercase transition-colors duration-300 transform bg-orange-200 rounded
                 hover:bg-orange-300 focus:bg-gray-400 focus:outline-none mb-2">
                    View Details
                </button>
               </Link>
            </div>
        </div>
    );
};

export default VolunteerCard;