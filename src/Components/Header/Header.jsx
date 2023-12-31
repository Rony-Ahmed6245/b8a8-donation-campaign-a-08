import { NavLink } from "react-router-dom";


const Header = () => {
    const home = <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-500 underline font-bold bgTrans" : "bgTrans"
        }
    >
        Home
    </NavLink>;
    const donation = <NavLink
        to="/donation"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-500 underline font-bold " : ""
        }
    >
        Donation
    </NavLink>;
    const statistics = <NavLink
        to="/statistics"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-red-500 underline font-bold bgTrans " : ""
        }
    >
        Statistics
    </NavLink>;

    return (
        <div className="max-w-7xl mx-auto ">
            <div className="px-4 md:px-4 lg:px-4 mt-4  bg-none z-30 relative ">
                <div className="navbar flex justify-between items-center ">
                    <img className="w-[200px]" src={'https://i.ibb.co/JHv5hjn/Logo.png'} alt="" />
                    <div className="">
                        <div className="dropdown">
                            <label tabIndex={1} className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] text-red-500 w-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className=" menus menu-sm dropdown-content  z-[10]  rounded-box  -left-10">
                                <li className="text-4xl">{home}</li>
                                <li className="my-4 text-4xl">{donation}</li>
                                <li className="text-4xl">{statistics}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className=" menu-horizontal px-1 gap-10 mr-2">
                            <li className="">{home}</li>
                            <li>{donation}</li>
                            <li>{statistics}</li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;