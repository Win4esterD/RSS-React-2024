const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const allPokemons = '?limit=100000&offset=0';

export const pokemonService = {
  async getAllPokemons() {
    try {
      const response = await fetch(baseURL + allPokemons);
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  },

  async searchPokemon(query: string) {
    try {
      const response = await fetch(baseURL + query);
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  },
};
