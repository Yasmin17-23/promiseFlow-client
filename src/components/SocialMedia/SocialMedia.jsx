import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const SocialMedia = () => {
    const { googleLogin, githubLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialLogin = async socialLogin => {
        
        try{
            const result = await socialLogin()
            console.log(result.user);
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                email: result?.user?.email,
            }, {
                withCredentials : true,
            })
            console.log(data)
            toast.success('Login Successfully');
            navigate(location?.state ? location.state : '/');
        }
        catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    }
    return (
        <div>
             <div className="flex justify-center space-x-4 mb-4">
                        <button onClick={() => handleSocialLogin(googleLogin)}
                         aria-label="Log in with Google" 
                          className="py-3 px-5 flex justify-between 
                          items-center border-2 border-orange-800 rounded-xl">
                           <FcGoogle className="text-xl mr-2"/> <span className="text-orange-700 font-bold">Google</span>
                        </button>
                        <button onClick={() => handleSocialLogin(githubLogin)}
                          aria-label="Log in with Twitter" 
                          className="py-3 px-5 rounded-xl flex justify-between 
                          items-center border-2 border-orange-800">
                          <FaGithub className="text-xl mr-2"/> <span className="text-orange-700 font-bold">GitHub</span>
                        </button>
                       
                    </div>
        </div>
    );
};

export default SocialMedia;