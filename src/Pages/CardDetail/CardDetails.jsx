import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardSpacification from "../../Components/CardSpecific/CardSpacification";


const CardDetails = () => {
    const [card, setCard] = useState({});

    const { id } = useParams();
    
    const cards = useLoaderData();


    useEffect(() => {

        const findCard = cards?.find(card => card.id == id)
        setCard(findCard);

    }, [cards, id])

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <CardSpacification card={card}></CardSpacification>
            </div>

        </div>
    );
};

export default CardDetails;