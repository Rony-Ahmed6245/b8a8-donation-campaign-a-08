import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "../../Components/DonationCard/DonationCard";

const Donation = () => {
    const [donationData, setDonationData] = useState([])
    const [noData, setNoData] = useState(false)
    const [isShow, setIsShow] = useState(false)


    useEffect(() => {
        // get boruser data 
        const getItem = JSON.parse(localStorage.getItem('donation'))
        if (getItem) {

            setDonationData(getItem);
        } else {
            setNoData('no data found');
        }
    },
        [])

    // const handelSeeMore = ()=>{
    //     console.log("click me se");
    // }



    return (
        <div className="max-w-7xl mx-auto my-10">

            {
                noData ? <p className="h-[80vh] flex justify-center items-center text-2xl">No data found</p> :

                    <div>
                        <div className="flex justify-center items-center">
                            <div className=" grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-12  px-4 md:px-4 lg:px-4 ">
                                {
                                    isShow ?
                                        donationData.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                                        :
                                        donationData.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)

                                }
                            </div>

                        </div>
                        <div className="text-center">
                            <button onClick={() => setIsShow(!isShow)} className="">

                                { !isShow ? (
                                    <button onClick={() => setIsShow(!isShow)} className="bg-[#009444] font-semibold text-base text-white py-2 px-4 my-10 rounded-md">
                                        see more
                                    </button>
                                ) : null};
                            </button>
                        </div>
                    </div>


            }

        </div>
    );
};

export default Donation;