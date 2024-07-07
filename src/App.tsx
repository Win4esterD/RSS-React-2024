import { Component } from 'react';
import { Header } from './modules';
import { pokemonService } from './api/pokemonService';
import style from './App.module.css';
import { PokemonType } from './types';
import { Loader, Button } from './components';

type AppProopsType = object;
type AppStateProps = {
  initialRender: [];
  searchRender: PokemonType;
  showLoader: boolean;
  errorCalled: boolean;
};

class App extends Component<AppProopsType, AppStateProps> {
  constructor(props: AppProopsType) {
    super(props);
    this.state = {
      initialRender: [],
      searchRender: {} as PokemonType,
      showLoader: false,
      errorCalled: false,
    };
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
  }
  async componentDidMount() {
    const searchQuery = localStorage.getItem('searchQuery');
    this.handleSearchRequest(searchQuery ? searchQuery : '');
  }

  async handleSearchRequest(query: string) {
    this.setState({ showLoader: true });
    if (query !== '') {
      const response = await pokemonService.searchPokemon(query);
      this.setState({ searchRender: response, initialRender: [] });
    } else {
      const response = await pokemonService.getAllPokemons();
      this.setState({ initialRender: response.results, searchRender: {} as PokemonType });
    }
    localStorage.setItem('searchQuery', query);
    this.setState({ showLoader: false });
  }

  render() {
    return (
      <>
        <Header searchHandler={this.handleSearchRequest} />
        <main className={style.main}>
          {
            <div className={style.initialBlock}>
              {this.state.initialRender.length > 0 ? (
                this.state?.initialRender?.map((el: { name: string }, i: number) => (
                  <p
                    key={i}
                    onClick={() => this.handleSearchRequest(el.name)}
                    className={style.nameInInitialBlock}
                  >
                    {el.name}
                  </p>
                ))
              ) : (
                <div>
                  <p className={style.pokemonName}>{this.state?.searchRender?.name}</p>
                  {this.state.searchRender?.sprites &&
                    Object.values(this.state.searchRender?.sprites).map(
                      (el, i) => typeof el === 'string' && <img key={i} src={el} />
                    )}
                </div>
              )}
            </div>
          }
          {this.state.showLoader && <Loader />}
          <Button
            onClick={() => {
              this.setState({
                initialRender: [],
                searchRender: {} as PokemonType,
                errorCalled: true,
              });
            }}
          >
            Call render error
          </Button>
          {this.state.errorCalled && <p>{this.state.searchRender.sprites.back_default}</p>}
        </main>
      </>
    );
  }
}

export default App;
