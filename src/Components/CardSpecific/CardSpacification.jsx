

const CardSpacification = ({ card }) => {

    console.log(card);
    const { image, title, dsc, category, cardBgColor, categoryBgColor, primaryColor,price } = card;


    return (
        <div className="m-10">
            <div className=" container -z-10">
                <img className="image " src={image} alt="" />
                <div className="overlay"><button className="bg-[#FF444A] text-white font-semibold text-xl py-2 px-4 rounded-md">Donate ${price}</button></div>
            </div>
            <div>
                <h1 className="font-bold text-4xl my-14">{title}</h1>
                <p className="font-normal text-base text-[#0b0b0b] text-justify">{dsc}</p>
            </div>
        </div>
    );
};

export default CardSpacification;