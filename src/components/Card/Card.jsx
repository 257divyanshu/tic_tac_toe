import Icon from "../Icon/Icon";
import "./card.css";

function Card ({iconName, onCardClick}) {
    return (
        <div
            className="card"
            onClick={onCardClick}
            >
            <Icon iconName={iconName}/>
        </div>
    )
}

export default Card;