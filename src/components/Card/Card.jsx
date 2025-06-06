import Icon from "../Icon/Icon";
import "./card.css";

function Card ({onCardClick, gameEnded, player, index}) {
    let icon = <Icon/>
    if(player=="X"){
        icon = <Icon iconName={"cross"} />
    }
    else if(player=="O"){
        icon = <Icon iconName={"circle"} />
    };
    return (
        <div
            className="card"
            onClick={()=>!gameEnded && player=="" && onCardClick(index)}
            >
            {icon}
        </div>
    )
}

export default Card;

// - key cannot be used as a prop