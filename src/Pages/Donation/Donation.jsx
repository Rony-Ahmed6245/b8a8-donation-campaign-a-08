import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "../../Components/DonationCard/DonationCard";

const Donation = () => {
    const [donationData, setDonationData] = useState([])
    const [noData, setNoData] = useState(false)


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

    return (
        <div className="max-w-7xl mx-auto my-10">

            {
                noData ? <p className="h-[80vh] flex justify-center items-center text-2xl">No data found</p> :

                    <div className="flex justify-center items-center">
                        <div className=" grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-12  px-4 md:px-4 lg:px-4 ">
                            {
                                donationData.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                            }
                        </div>
                    </div>



            }

        </div>
    );
};

export default Donation;