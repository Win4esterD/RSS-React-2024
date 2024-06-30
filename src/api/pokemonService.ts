const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export const pokemonService = {
  async getAllPokemons() {
    try {
      const response = await fetch(baseURL);
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
  }
};
