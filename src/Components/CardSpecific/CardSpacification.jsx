import swal from "sweetalert";


const CardSpacification = ({ card }) => {

    const { id, image, title, dsc, category, cardBgColor, categoryBgColor, primaryColor, price } = card || {};

    const handelAddToDonation = () => {
        // console.log(card);
        const addedDonationArr = [];



        const getItem = JSON.parse(localStorage.getItem('donation'))
        if (!getItem) {
            addedDonationArr.push(card)
            localStorage.setItem('donation', JSON.stringify(addedDonationArr))
            swal("Good job!", "Successfully added !", "success");

        }
        else {
            const isExit = getItem.find(card => card.id === id)
            if (!isExit) {
                addedDonationArr.push(...getItem, card)
                localStorage.setItem('donation', JSON.stringify(addedDonationArr))
                swal("Good job!", "Successfully added !", "success");
            }
            else {
                swal("Error!", "Already added !", "error");
            }

        }


    }







    return (
        <div className="m-10">
            <div className=" container ">
                <img className="image  " src={image} alt="" />
                <div className="overlay">
                    <button
                        onClick={handelAddToDonation}
                        className="bg-[#FF444A] z-10 text-white font-semibold text-xl py-2 px-4 rounded-md">Donate ${price}</button>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-4xl my-14">{title}</h1>
                <p className="font-normal text-base text-[#0b0b0b] text-justify">{dsc}</p>

            </div>
        </div>
    );
};

export default CardSpacification;