import profileImg1 from "../../assets/images/feed-img-1.jpg";
import profileImg2 from "../../assets/images/feed-img-2.jpg";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const FeedBack = () => {
    return (
        <section className="bg-white dark:bg-gray-900 my-8">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-bold font-abril text-center 
                text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Our <span className="text-orange-800">FeedBack Part</span>
                </h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                   Here our honuable quest can drop their valuable feedback to our oraganizer, our important 
                   volunteers and our beautiful charity works.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer 
                    rounded-xl hover:border-transparent group hover:bg-orange-200 dark:border-gray-700 
                    dark:hover:border-transparent hover:text-white">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4
                             ring-4 ring-gray-300" 
                             src={profileImg1} alt="" />

                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize 
                                    md:text-2xl dark:text-white group-hover:text-white">Faridul Mridha</h1>

                                    <p className="mt-2 font-bold text-orange-300/60 capitalize dark:text-gray-300
                                     group-hover:text-gray-300">Teacher</p>
                                </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-white">
                            This charity is the best oraganization for Education care in rural children.They also ensure 
                            health service for children, women and elderly people.  
                        </p>

                        <div className="flex mt-4 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                               <FaSquareInstagram className="text-2xl text-[#F56040]"/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                              <FaFacebook className="text-2xl text-[#1877F2]"/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                             <FaTwitterSquare className="text-2xl text-[#1DA1F2]"/>
                            </a>
                        </div>
                    </div>
                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer 
                    rounded-xl hover:border-transparent group hover:bg-orange-200 dark:border-gray-700 
                    dark:hover:border-transparent hover:text-white">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4
                             ring-4 ring-gray-300" 
                             src={profileImg2} alt="" />

                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize 
                                    md:text-2xl dark:text-white group-hover:text-white">Anisha Kabir</h1>

                                    <p className="mt-2 font-bold text-orange-300/60 capitalize dark:text-gray-300
                                     group-hover:text-gray-300">Youtuber</p>
                                </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-white">
                            This charity is the best oraganization for Education care in rural children.They also ensure 
                            health service for children, women and elderly people.  
                        </p>

                        <div className="flex mt-4 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                               <FaSquareInstagram className="text-2xl text-[#F56040]"/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                              <FaFacebook className="text-2xl text-[#1877F2]"/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                             <FaTwitterSquare className="text-2xl text-[#1DA1F2]"/>
                            </a>
                        </div>
                    </div>

                   

                  
                </div>
            </div>
        </section>
    );
};

export default FeedBack;