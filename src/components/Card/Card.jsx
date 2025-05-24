import Icon from "../Icon/Icon";
import "./card.css";

function Card ({iconName}) {
    return (
        <div className="card">
            <Icon iconName={iconName}/>
        </div>
    )
}

export default Card;