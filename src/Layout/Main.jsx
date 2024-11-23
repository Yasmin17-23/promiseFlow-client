import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div>
           <div className="max-w-6xl mx-auto mt-4">
             <Navbar></Navbar>
           <div className="min-h-[calc(100vh-381px)] max-w-7xl mx-auto mt-4">
             <Outlet></Outlet> 
           </div>
           </div>
           <Footer></Footer> 
        </div>
        
    );
};

export default Main;