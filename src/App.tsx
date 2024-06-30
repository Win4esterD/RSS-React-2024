import { Component } from 'react';
import { Header } from './modules';
import { pokemonService } from './api/pokemonService';
import style from './App.module.css';
import { PokemonType } from './types';

type AppProopsType = object;
type AppStateProps = {
  initialRender: [];
  searchRender: PokemonType;
};

class App extends Component<AppProopsType, AppStateProps> {
  constructor(props: AppProopsType) {
    super(props);
    this.state = {
      initialRender: [],
      searchRender: {} as PokemonType,
    };
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
  }
  async componentDidMount() {
    const searchQuery = localStorage.getItem('searchQuery');
    if (searchQuery) {
      const response = await pokemonService.searchPokemon(searchQuery);
      this.setState({ searchRender: response.results });
      this.setState({ initialRender: [] });
    } else {
      const response = await pokemonService.getAllPokemons();
      this.setState({ initialRender: response.results });
      this.setState({ searchRender: {} as PokemonType });
    }
  }

  async handleSearchRequest(query: string) {
    const response = await pokemonService.searchPokemon(query);
    this.setState({ searchRender: response });
    this.setState({ initialRender: [] });
  }

  render() {
    return (
      <>
        <Header />
        <main className={style.main}>
          {
            <div className={style.initialBlock}>
              {this.state.initialRender.map((el: { name: string }, i: number) => (
                <p
                  key={i}
                  onClick={() => this.handleSearchRequest(el.name)}
                  className={style.nameInInitialBlock}
                >
                  {el.name}
                </p>
              ))}
            </div>
          }
          {this.state.initialRender.length <= 0 && (
            <div>
              <p>{this.state.searchRender.name}</p>
              {this.state.searchRender.sprites &&
                Object.values(this.state.searchRender.sprites).map(
                  (el, i) => typeof el === 'string' && <img key={i} src={el} />
                )}
            </div>
          )}
        </main>
      </>
    );
  }
}

export default App;
