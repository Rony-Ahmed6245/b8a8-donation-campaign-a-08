import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardSpacification from "../../Components/CardSpecific/CardSpacification";


const CardDetails = () => {
    const [card, setCard] = useState({});
    // console.log(card);



    const { id } = useParams();
    // console.log(id);
    const cards = useLoaderData();
    // console.log(cards);

    useEffect(() => {

        const findCard = cards?.find(card => card.id == id)
        setCard(findCard);

    }, [cards, id])

    // console.log(card);



    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <CardSpacification card={card}></CardSpacification>
            </div>

        </div>
    );
};

export default CardDetails;