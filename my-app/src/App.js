import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />
          <Title>NBA Finals Clicky Game</Title>
          {this.state.characters.map(character => (
            <CharacterCard
              removeFriend={this.removeFriend}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              occupation={character.occupation}
              location={character.location}
            />
          ))}
        {/* </Navbar> */}
      </Wrapper>
    );
  }
}

export default App;
