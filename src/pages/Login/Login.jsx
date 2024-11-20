import { Link } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
    const { signInUser } = useAuth();
   
    const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = async (data) => {
        const { email, password } = data;
         try{
             const result = await signInUser(email, password)
             console.log(result.user);
             toast.success("Login Successfully");
         }
        catch (err){
            console.log(err);
            toast.error(err?.message);
        }
      }
    return (
        <div className="hero min-h-screen">
             
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:mr-6">
                    <form onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <h2 className="text-2xl font-bold text-orange-800 text-center mb-4">Please Login !</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" 
                              {...register("email", { required: true })}/>
                             {errors.email && <span className='text-red-600 mt-2 text-md'>
                                This name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"  
                                 {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-600 mt-2 text-md'>This password field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white font-bold">LOGIN</button>
                        </div>
                    </form>
                   <SocialMedia></SocialMedia>
                    <p className="text-xs text-center mb-4 sm:px-6 dark:text-gray-600">Don't have an account?
                        <Link to="/register" className="text-blue-800 font-bold"> Register</Link>
                    </p>
                </div>
            </div>

        </div >
    );
};

export default Login;