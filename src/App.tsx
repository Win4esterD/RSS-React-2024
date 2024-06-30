import React from 'react';
import { Header } from './modules';
import { pokemonService } from './api/pokemonService';

class App extends React.Component {
  async componentDidMount() {
    const searchQuery = localStorage.getItem('searchQuery');
    if (searchQuery) {
      const response = await pokemonService.searchPokemon(searchQuery);
      console.log(response)
    } else {
      const response = await pokemonService.getAllPokemons();
      console.log(response)
    }
  }

  render() {
    return (
      <>
        <Header />
        <main></main>
      </>
    );
  }
}

export default App;
