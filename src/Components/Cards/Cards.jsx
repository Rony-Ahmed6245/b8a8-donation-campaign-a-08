import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 px-4 md:px-4 lg:px-2 ">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};
Cards.propTypes = {
    cards: PropTypes.arr
};
export default Cards;