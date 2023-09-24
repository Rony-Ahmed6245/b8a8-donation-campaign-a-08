

const Card = ({ card }) => {
    console.log(card);
    const {image, title, category, cardBgColor, categoryBgColor, primaryColor
    } = card;
    const cardbg = {
        backgroundColor: cardBgColor,
    };
    const categoryBg = {
        backgroundColor: categoryBgColor,
        color:primaryColor,
    }
    const titleColor ={
        color:primaryColor,
    }

    return (
        <div>
            <div  style={cardbg} className="card card-compact   shadow-sm">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <span style={categoryBg} className="py-1 px-4 w-[85px] rounded-md font-medium text-sm">{category}</span>
                    <p style={titleColor} className="font-semibold text-lg" >{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;