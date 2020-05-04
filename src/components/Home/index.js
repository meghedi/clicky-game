import React, 
{ Component } from "react";
import "./style.css";
import API from "../../utils/API";
import ResultsContianer from "../ResultsContainer";
import Wrapper from "../Wrapper";
import Nav from "../Nav";

let clickedArray = [];


class Home extends Component {

    constructor() {
    super();
    this.state = {
      results: [],
      score: 0,
      topScore: 0,
      clickedArray : [],
      guess: ""
    };
  }



  componentDidMount() {
   this.loadImages();
  }

  loadImages = () => {
      let randomNumber = Math.floor(Math.random() * 9);
    API.getImages("cartoon Images", randomNumber)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  }

  handleClick = (id) => {

        if(this.state.clickedArray.indexOf(id) > -1){
            console.log("wrong gueess");
            this.setState({ score:0, topScore: this.state.topScore, clickedArray: [], guess: false });
        }else{
            clickedArray.push(id);
            this.setState({ score: this.state.score + 1, topScore: this.state.topScore +1 , clickedArray: clickedArray, guess:true});
        }

        console.log(clickedArray);

    this.loadImages();
  };

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} topScore={this.state.topScore} guess={this.state.guess}/>
        <div className="container">
          {this.state.results.map((item) => (
            <ResultsContianer
              imageUrl={item.images.fixed_height_still.url}
              handleClick={this.handleClick}
              itemId={item.id}
              key={item.id} />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default Home;
