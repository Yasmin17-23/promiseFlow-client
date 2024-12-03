import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";



const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [open, setOpen] = useState(false);
    const { user, logOut } = useAuth();
    
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleThemeToggle = e => {
        if(e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }


    const navItems = <>
        <li className="mr-2 mb-2"><Link to="/" className="bg-orange-200 hover:bg-orange-900 
         text-white hover:text-white">Home</Link></li>
        <li className="mr-2 mb-2"><Link to="/need-volunteer" className="bg-orange-200 hover:bg-orange-900
         text-white hover:text-white">Need Volunteer</Link></li>
    </>

    const dropItems = <>
        <li className=""><Link to="/add-volunteer-post" className="bg-orange-200 
        hover:bg-orange-900 text-white hover:text-white mb-2 ">
            Add Volunteer Post</Link></li>
        <li><Link to="/manage-my-post" className="bg-orange-200
         hover:bg-orange-900 text-white hover:text-white ">Manage My Post</Link></li>
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
                        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2
                            duration-1000 ${open ? 'top-16' : '-top-72'} shadow absolute`}>
                        {navItems}
                        <li>
                            <details>
                                <summary className="bg-orange-200 hover:bg-orange-900 
                              text-white hover:text-white z-10">My Profile</summary>
                                <ul className={``}>
                                    {dropItems}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-between items-center">
                    <img src={logo} alt="" className="w-12 h-12" />
                    <Link to="/" className="text-[#1e266e] lg:text-2xl">Promise
                        <span className="text-orange-400">Flow</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                    <li>
                        <details>
                            <summary className="bg-orange-200 hover:bg-orange-900 
                              text-white hover:text-white">My Profile</summary>
                            <ul className="z-10">
                                {dropItems}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="lg:ml-8">
                <label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" 
                    onChange={handleThemeToggle}
                    value="synthwave" className="toggle theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
            <div className="navbar-end ">

                {
                    user &&
                    <div className="dropdown dropdown-end flex">
                        <div className="flex justify-between items-center space-x-4">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div title={user?.displayName} className="w-10 rounded-full ">
                                    <img referrerPolicy='no-referrer'
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