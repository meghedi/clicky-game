import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav>
      <div className="content">
        <div>Clicky Game</div>
        <div style={ props.guess!=="" ? { display:'none'} : {display : 'block'} }>Click an Image to begin!</div>
        <div style={ props.guess!=="" ? { display:'block'} : {display : 'none'}} >{ props.guess ? <span className="rightGuess">You Guessed Correctly!</span> : 
        <span className="wrongGuess shake-chunk shake-constant">Your Guess is Wrong!</span>}</div>
        <div>
          Score: {props.score} | Top Score: {props.topScore}{" "}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
