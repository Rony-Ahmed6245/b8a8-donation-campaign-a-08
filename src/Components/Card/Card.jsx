import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ card }) => {
    // console.log(card);
    const { id, image, title, category, cardBgColor, categoryBgColor, primaryColor
    } = card;
    const cardbg = {
        backgroundColor: cardBgColor,
    };
    const categoryBg = {
        backgroundColor: categoryBgColor,
        color: primaryColor,
    }
    const titleColor = {
        color: primaryColor,
    }

    return (
        <div>
            <Link to={`/cardDetail/${id}`} style={cardbg} className="card card-compact   shadow-sm " >
                <figure><img className="h-[150px] md:h-[200px] w-full" src={image} /></figure>
                <div className="card-body">
                    <span style={categoryBg} className="py-1 text-center px-4 w-[100px] rounded-md font-medium text-sm">{category}</span>
                    <p style={titleColor} className="font-semibold text-lg" >{title}</p>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;