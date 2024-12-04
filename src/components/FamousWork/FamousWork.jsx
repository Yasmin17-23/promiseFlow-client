import blogImg1 from "../../assets/images/blog-img-1.jpg";
import blogImg2 from "../../assets/images/blog-img-2.jpg";
import blogImg3 from "../../assets/images/blog-img-3.jpg";
import blogImg4 from "../../assets/images/blog-img-4.jpg";

const FamousWork = () => {
    return (
        <section className="bg-white dark:bg-gray-900 my-8">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl
             dark:text-white font-abril">Our <span className="text-orange-600/50">Most Famous</span> Work</h1>
    
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                <div className="lg:flex">
                    <img className="object-cover w-full h-56 rounded-lg lg:w-64"
                     src={blogImg1}
                     alt="" />
    
                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                        <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                           Healthcare Camp for village people.
                        </a>
                        
                        <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                    </div>
                </div>
    
                <div className="lg:flex">
                    <img className="object-cover w-full h-56 rounded-lg lg:w-64"
                      src={blogImg2}
                    alt="" />
    
                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                        <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                           Healthcare Camp for village people.
                        </a>
    
                        <span className="text-sm text-gray-500 dark:text-gray-300">On: 12 July 2020</span>
                    </div>
                </div>
    
                <div className="lg:flex">
                    <img className="object-cover w-full h-56 rounded-lg lg:w-64" 
                    src={blogImg3}
                     alt="" />
    
                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                        <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                           Food giving in flood affected people.
                        </a>
    
                        <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                    </div>
                </div>
    
                <div className="lg:flex">
                    <img className="object-cover w-full h-56 rounded-lg lg:w-64" 
                    src={blogImg4}
                    alt="" />
    
                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                        <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                            Free Vaccination Donate in various animals.
                        </a>
    
                        <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2021</span>
                    </div>
                </div>
    
            </div>
        </div>
    </section>
    );
};

export default FamousWork;