
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;