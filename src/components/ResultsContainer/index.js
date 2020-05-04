import React from "react";

function ResultsContainer(props){
    return (
        <div className="image">
            <img src={props.imageUrl} alt={props.name} onClick={() => props.handleClick(props.itemId)}/>
        </div>
    )
}

export default ResultsContainer;