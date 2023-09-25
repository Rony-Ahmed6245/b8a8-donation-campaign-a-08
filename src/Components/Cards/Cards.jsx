import Card from "../Card/Card";

const Cards = ({ cards }) => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 px-4 md:px-4 lg:px-4 ">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;