
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";




const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;