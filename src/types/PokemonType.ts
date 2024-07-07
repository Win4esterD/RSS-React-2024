export type PokemonType = {
  name: string;
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
};
