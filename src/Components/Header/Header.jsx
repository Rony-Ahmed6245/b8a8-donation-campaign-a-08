import { NavLink } from "react-router-dom";


const Header = () => {
    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
    >
        Home
    </NavLink>;
    const donation = <NavLink
        to="/donation"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
    >
        Donation
    </NavLink>;
    const statistics = <NavLink
        to="/statistics"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
    >
        Statistics
    </NavLink>;

    return (
        <div className="px-4 md:px-4 lg:px-4 mt-4">
            <div className="navbar bg-base-100 flex justify-between items-center">
                <img className="w-[150px]" src={'https://i.ibb.co/JHv5hjn/Logo.png'} alt="" />
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1]  shadow bg-base-100 rounded-box abuslate -left-10">
                            <li className="">{home}</li>
                            <li>{donation}</li>
                            <li>{statistics}</li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="">{home}</li>
                        <li>{donation}</li>
                        <li>{statistics}</li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;