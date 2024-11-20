import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";



const Navbar = () => {
    const navItems = <>
        <li className="mr-2 "><Link to="/" className="bg-orange-200 hover:bg-orange-900 
         text-white hover:text-white">Home</Link></li>
        <li className="mr-2 "><Link to="/need-volunteer" className="bg-orange-200 hover:bg-orange-900
         text-white hover:text-white">Need Volunteer</Link></li>
        <li><Link to="/my-profile" className="bg-orange-200 hover:bg-orange-900 text-white hover:text-white">My Profile</Link></li>

     </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {navItems}
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <img src={logo} alt="" className="w-12 h-12"/>
                    <Link className="text-[#1e266e] lg:text-2xl">Promise<span className="text-orange-400">Flow</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <Link to="/login" className="bg-orange-300 hover:bg-orange-700 text-white 
                font-bold  px-7 py-3 rounded-xl">LOGIN</Link>
            </div>
        </div>
    );
};

export default Navbar;