import { useState } from "react";
import Card from "../Card/Card";
import "./grid.css"

function isWinner(board, symbol){
    if(
        (board[0]==board[1] && board[1]==board[2] && board[2]==symbol) || 
        (board[3]==board[4] && board[4]==board[5] && board[5]==symbol) || 
        (board[6]==board[7] && board[7]==board[8] && board[8]==symbol) || 
        (board[0]==board[3] && board[3]==board[6] && board[6]==symbol) || 
        (board[1]==board[4] && board[4]==board[7] && board[7]==symbol) || 
        (board[2]==board[5] && board[5]==board[8] && board[8]==symbol) || 
        (board[0]==board[4] && board[4]==board[8] && board[8]==symbol) || 
        (board[2]==board[4] && board[4]==board[6] && board[6]==symbol)
    ){
        return symbol;
    }
    else{
        return null;
    }
};

function Grid({ numberOfCards }) {
    const [turn,setTurn] = useState(true); // true -> O false -> X
    const [board,setBoard] = useState(Array(numberOfCards).fill("")); // true -> O false -> X
    const [winner,setWinner] = useState(null);
    function cardClickHandler(index) {
        if(turn){
            board[index] = "O";
        }
        else{
            board[index] = "X";
        };
        const winnerPlayer = isWinner(board,turn ? "O":"X");
        if(winnerPlayer){
            setWinner(winnerPlayer);
        }
        setBoard(board);
        setTurn(!turn);
    }
    return (
        <>
            {winner && <h1 className="turn-highlight">Winner is {winner}</h1>}
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
                {/* {Array(numberOfCards).fill(<Card />).map((element, index) => {
                    return <Card key={index} player={turn ? "circle":"cross"} onCardClick={cardClickHandler} />
                })} */}
                {/* using the player prop here is a bad idea */}
                {/* because on clicking any card */}
                {/* turn will toggle */}
                {/* if turn toggles */}
                {/* player prop's value changes */}
                {/* player prop's value changes for all Card components */}
                {/* because the prop's value changes */}
                {/* all components re-render */}
                {/* this is a problem! */}
                {/* we want the only the card that is clicked to re-render with the new icon */}
                {/* so we need to do something inside the Card component's onclick handler */}

                {board.map((value,idx)=>{
                    return <Card key={idx} player={value} onCardClick={cardClickHandler} index={idx}/>
                })}
                


            </div>
        </>
    )
}

export default Grid;