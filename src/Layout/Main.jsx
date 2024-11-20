import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto mt-4">
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-381px)]">
             <Outlet></Outlet> 
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;