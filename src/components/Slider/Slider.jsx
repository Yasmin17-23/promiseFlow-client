import { Link } from "react-router-dom";


const Slider = ({ image, text }) => {
    return (
        <div className="w-full bg-center bg-cover h-[36rem]" 
        style={{
            backgroundImage: `url(${image})`,
        }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/60">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl lg:mb-5">
                    {text}
                </h1>
                <br />
                <Link
                  className="w-full px-5 py-4 mt-4 text-sm font-semibold text-white 
                   capitalize transition-colors duration-300 transform bg-orange-400 rounded-md
                    lg:w-auto hover:bg-orange-700 focus:outline-none focus:bg-blue-500">
                        Need More Volunteer
                    </Link>
            </div>
        </div>
    </div>
    );
};

export default Slider;