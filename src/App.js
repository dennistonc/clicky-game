import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    sentence: "Click on a villager to begin! Try not to click on the same villager twice!",
    score: 0,
    topScore: 0,
    villagerID: []
  };

  randomizeVillagers = (id) => {
    // Uses this.state.characters for characters with equal ids and shuffles
    let villagerID = this.state.villagerID
    if (villagerID.includes(id)) {
      this.setState({ sentence: "You guessed incorrectly!", score: 0, villagerID: [] });
      return;
    } else {
      villagerID.push(id)
      let topScore = this.state.topScore
      let score = this.state.score

      // Score and topScore calculations and score keeper -- won't let score be greater than topScore when counting up
      if (villagerID.includes(id) && topScore === score) {
        this.setState({ topScore: topScore + 1, score: score + 1 })
      }
      if (score === 12) {
        this.setState({ sentence: "You win!", villagerID: [] });
        console.log("Winner! 🎊");
        return;
      }

      // Keeps shuffling the characters around after thye've been clicked
      let newCharacters = characters.sort((a,b)=>Math.random()-0.5)
      this.setState({ sentence: "You guessed correctly!", score: score + 1, characters:newCharacters, villagerID });

    };
  }

  // Map over this.state.characters and render a Cards component for each character object
  render() {
    return (
      <div>

      <NavBar
      sentence={this.state.sentence}
      score={this.state.score}
      topScore={this.state.topScore}
      />

      <Wrapper>
        {this.state.characters.map(character => (
          <Cards
            randomizeVillagers={this.randomizeVillagers}
            id={character.id}
            key={character.id}
            image={character.image}
            alt={character.name}
          />
        ))}
        </Wrapper>

        <Footer />
      </div>
    );
  }
}

export default App;
