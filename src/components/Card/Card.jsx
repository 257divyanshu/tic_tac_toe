import { useState } from "react";
import Icon from "../Icon/Icon";
import "./card.css";

function Card ({onCardClick}) {
    let [iconName,setIconName] = useState("");
    return (
        <div
            className="card"
            onClick={()=>{
                if(!iconName){
                    let turn = onCardClick();
                    setIconName(turn ? "circle":"cross");
                }
            }}
            >
            <Icon iconName={iconName}/>
        </div>
    )
}

export default Card;