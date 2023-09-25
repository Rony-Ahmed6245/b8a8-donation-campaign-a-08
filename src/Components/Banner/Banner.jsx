

const Banner = ({handelSearchText}) => {
    return (
        <div>
            <div  className="bg">
                <div className="text-center py-28 md:py-60 px-4">
                    <h1 className="py-4 font-semibold md:font-bold text-3xl md:text-5xl">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center mt-10">
                        <form onSubmit={handelSearchText} className="flex items-center">
                            <input type="text" placeholder="Search here...." name="name" className="bannerInput px-2 md:px-4 lg:px-12" />
                            <button type="submit" className="inputbtn">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;