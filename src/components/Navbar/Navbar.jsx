import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useAuth();
   

    const navItems = <>
        <li className="mr-2 mb-2"><Link to="/" className="bg-orange-200 hover:bg-orange-900 
         text-white hover:text-white">Home</Link></li>
        <li className="mr-2 mb-2"><Link to="/need-volunteer" className="bg-orange-200 hover:bg-orange-900
         text-white hover:text-white">Need Volunteer</Link></li>
        <li><Link to="/my-profile" className="bg-orange-200 hover:bg-orange-900 text-white hover:text-white">My Profile</Link></li>

     </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"
                       onClick={() => setOpen(!open)}>
                        {
                            open === true ?
                            <AiOutlineClose></AiOutlineClose> :
                            <AiOutlineMenu></AiOutlineMenu>
                        }
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2
                            duration-1000 ${open ? 'top-16' : '-top-72'} shadow absolute`}>
                       {navItems}
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <img src={logo} alt="" className="w-12 h-12"/>
                    <Link to="/" className="text-[#1e266e] lg:text-2xl">Promise
                    <span className="text-orange-400">Flow</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navItems}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user &&
                    <div className="dropdown dropdown-end flex">
                        <div className="flex justify-between items-center space-x-4">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div title={user?.displayName} className="w-10 rounded-full ">
                                    <img  referrerPolicy='no-referrer'
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <button onClick={logOut}
                            className="btn btn-sm bg-orange-500 text-white hover:bg-orange-800">Sign Out</button>
                        </div>

                       
                    </div>

                   }
                {
                    !user && 
                    <Link to="/login" className="bg-orange-300 hover:bg-orange-700 text-white 
                    font-bold  px-7 py-3 rounded-xl">LOGIN</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;