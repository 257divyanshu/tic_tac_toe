import { useState } from "react";
import Card from "../Card/Card";
import "./grid.css"

function Grid({ numberOfCards }) {
    const [turn,setTurn] = useState(true); // true -> O false -> X
    function cardClickHandler() {
        console.log("card clicked");
        setTurn(!turn);
        return turn;
    }
    return (
        <>
            <h1 className="turn-highlight">Current Turn : {turn ? "O" : "X"}</h1>
            <div className="grid">

                {/* {Array(numberOfCards).map((element,index)=><Card key={index} />)} */}
                {/* the above line didn't work */}
                {/* because Array(numberOfCards) created a sparse array */}
                {/* not a fully populated one */}
                {/* and when we try to call .map() on it, it skips the uninitialized (empty) slots */}
                {/* so nothing is rendered */}

                {/* gpt's way */}
                {/* {Array.from({ length: numberOfCards }).map((_, index) => <Card key={index} />)} */}
                {/* the above line solves the problem */}
                {/* because Array.from({ length: numberOfCards }) creates an array of a specific length where every index is initialized, even if with undefined */}
                {/* it's not a sparse array */}
                {/* Now .map() works perfectly because it iterates over all the elements. */}

                {/* sir's way */}
                {Array(numberOfCards).fill(<Card />).map((element, index) => {
                    return <Card key={index} onCardClick={cardClickHandler} />
                })}


            </div>
        </>
    )
}

export default Grid;