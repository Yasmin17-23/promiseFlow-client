import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-zinc-500 text-white p-4 ">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                           <img src={logo} alt="" />
                        </div>  
                        <Link to="/" className="text-[#1e266e] self-center lg:text-2xl font-semibold">Promise
                        <span className="text-orange-400">Flow</span></Link>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase font-bold dark:text-gray-900">Volunteer</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/" rel="noopener noreferrer" href="#">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" rel="noopener noreferrer" href="#">About</Link>
                            </li>
                            <li>
                                <Link to="/my-profile" rel="noopener noreferrer" href="#">My Profile</Link>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase font-bold dark:text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase font-bold dark:text-gray-900">Contacts</h3>
                        <ul className="space-y-1">
                            <li>
                                <p>Phone No: +123-456-789</p>
                            </li>
                            <li>
                                <p>Email: volunteer@gmail.com</p>
                            </li>
                            <li>
                                <p>Address: Mirpur, Dhaka, Bangladesh</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-900">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                              <FaFacebook className="text-xl"/>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                              <FaXTwitter className="text-xl"/>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                              <FaLinkedinIn className="text-xl"/>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                              <FaInstagram className="text-xl"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-600">
                © PromiseFlow. All rights reserved.</div>
        </footer>
    );
};

export default Footer;