
import { Link } from "react-router-dom";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/images/signup.jpg"
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
    const { createUser } = useAuth();
   
    const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = async (data) => {
        const { email, password } = data;
         try{
             const result = await createUser(email, password)
             console.log(result.user);
             toast.success("Register Successfully");
         }
        catch (err){
            console.log(err);
            toast.error(err?.message);
        }
      }
    
    const passwordValidation = (value) => {
        if(value.length < 6){
            return toast.error('Password must be at least 6 characters or longer');
        }
        else if(!/[A-Z]/.test(value)){
            return toast.error('Password must contain at least one uppercase letter');
        }
        else if(!/[a-z]/.test(value)){
            return toast.error('Password must contain at least one lowercase letter');
        }
        return true;
    }
    return (
        <div className="hero min-h-screen my-10">    
        <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center ">
                <img src={registerImg} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:mr-6">
                <form onSubmit={handleSubmit(onSubmit)}
                className="card-body">
                 <h2 className="text-2xl font-bold text-orange-800 text-center mb-4">Hello, Please Register!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="FullName" className="input input-bordered" 
                          {...register("fullName", { required: true })}  />
                        {errors.fullName && <span className='text-red-600 mt-2 text-md'>
                            This name field is required</span>}
                    </div>
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
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="PhotoURL" className="input input-bordered" {...register("photo")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" 
                            {...register("password", { required: true, validate: passwordValidation })} />
                            {errors.password && <span className='text-red-600 mt-2 text-md'>This password field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info text-white font-bold">REGISTER</button>
                    </div>
                </form>
               <SocialMedia></SocialMedia>
                <p className="text-xs text-center mb-4 sm:px-6 dark:text-gray-600">Already have an account,
                    <Link to="/login" className="text-blue-800 font-bold"> Login</Link>
                </p>
            </div>
        </div>

    </div >
    );
};

export default Register;