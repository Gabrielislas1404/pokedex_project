import { useState } from "react";
import { getPokemonById, getPokemonByName } from "../utils/pokemons";
import Loading from "./Loading";
import PopupNotification from "./PopupNotification";

function Main() {
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleGetPokemon = async () => {
    try {
      if (!namePokemon) {
        return setError(true);
      }

      setLoading(true);
      const response = await getPokemonByName(namePokemon.toLowerCase());
      setPokemon(response);
      setLoading(false);
    } catch (error) {
      setNamePokemon("");
      setError(true);
      console.log(error.message);
    }
  };

  const getWindowSize = () => {
    return window.innerWidth < 760;
  };

  const handleGetPokemonById = async () => {
    try {
      setLoading(true);
      const randomId = Math.floor(Math.random() * 1026) + 1;
      const pokemon = await getPokemonById(randomId);
      setPokemon(pokemon);
      setLoading(false);
    } catch (error) {
      setError(true);
      setNamePokemon("");
      console.log(error.message);
    }
  };

  const returnPokemonImage = () => {
    return (
      pokemon?.sprites?.other?.showdown?.front_default ||
      pokemon?.sprites?.other?.dream_world?.front_default ||
      pokemon?.sprites?.other?.home?.front_default
    );
  };

  const handleHiddenPopup = () => {
    setError(false);
  };

  return (
    <section className="pokedex">
      {error && <PopupNotification show={error} hidden={handleHiddenPopup} />}
      <div className="pokedex__left-side">
        <div className="pokedex__search pokedex__search_left">
          <input
            value={namePokemon}
            onChange={(e) => setNamePokemon(e.target.value)}
            type="text"
            placeholder="Buscar Pokémon..."
            className="pokedex_search-input"
          />
          <button className="pokedex_search-button" onClick={handleGetPokemon}>
            <span className="pokedex_search-icon">🔍</span>
          </button>
        </div>

        <div className="pokedex__logo"></div>
        <div className="pokedex__bg-curve1_left"></div>
        <div className="pokedex__bg_curve2_left"></div>
        <div className="pokedex__curve1_left">
          <div
            className="pokedex__buttonGlass"
            onClick={getWindowSize ? handleGetPokemonById : null}
          >
            <div className="pokedex__reflect"> </div>
          </div>
          <div className="pokedex__miniButtonGlass_red"></div>
          <div className="pokedex__miniButtonGlass_yellow"></div>
          <div className="pokedex__miniButtonGlass_green"></div>
        </div>
        <div className="pokedex__curve2_left">
          <div className="pokedex__junction">
            <div className="pokedex__junction_up"></div>
            <div className="pokedex__junction_down"></div>
          </div>
        </div>
        <div className="pokedex__screen">
          <div className="pokedex__top-picture">
            <div className="pokedex__buttontop-picture_right"></div>
            <div className="pokedex__buttontop-picture_left"></div>
          </div>
          <div className="pokedex__picture">
            {loading ? (
              <Loading />
            ) : (
              <img
                className="pokedex__picture-img"
                src={returnPokemonImage()}
                alt="psykokwak"
                height="170"
              />
            )}
          </div>
          <div className="pokedex__buttonbottom-picture"></div>
          <div className="pokedex__speakers">
            <div className="pokedex__sp"></div>
            <div className="pokedex__sp"></div>
            <div className="pokedex__sp"></div>
            <div className="pokedex__sp"></div>
          </div>
        </div>
        <div className="pokedex__big-bluebutton"></div>
        <div className="pokedex__barbutton_left"></div>
        <div className="pokedex__barbutton_right"></div>
        <div className="pokedex__cross">
          <div className="pokedex__leftcross" onClick={handleGetPokemonById}>
            <div className="pokedex__leftT"></div>
          </div>
          <div className="pokedex__topcross" onClick={handleGetPokemonById}>
            <div className="pokedex__upT"></div>
          </div>
          <div className="pokedex__rightcross">
            <div
              className="pokedex__rightT"
              onClick={handleGetPokemonById}
            ></div>
          </div>
          <div className="pokedex__midcross">
            <div className="pokedex__midCircle"></div>
          </div>
          <div className="pokedex__botcross" onClick={handleGetPokemonById}>
            <div className="pokedex__downT"></div>
          </div>
        </div>
      </div>
      <div className="pokedex__right-side">
        <div className="pokedex__search">
          <input
            value={namePokemon}
            onChange={(e) => setNamePokemon(e.target.value)}
            type="text"
            placeholder="Buscar Pokémon..."
            className="pokedex_search-input"
          />
          <button className="pokedex_search-button" onClick={handleGetPokemon}>
            <span className="pokedex_search-icon">🔍</span>
          </button>
        </div>

        <div className="pokedex__stats">
          <strong>Name:</strong> {pokemon ? pokemon?.name : "No Pokemon"}
          <br />
          <strong>Type:</strong>{" "}
          {pokemon ? `${pokemon?.types?.[0]?.type?.name}` : "No pokemon"}
          <br />
          <strong>Height:</strong> {pokemon ? pokemon?.height : "No pokemon"}
          <br />
          <strong>Weight:</strong> {pokemon ? pokemon?.weight : "No pokemon"}
          <br />
          <br />
          <strong>habilites</strong>
          <br />
          <div className="pokemon_stats_habilites">
            {pokemon
              ? pokemon?.abilities?.map((ability) => (
                  <div key={ability.ability.name}>{ability.ability.name}</div>
                ))
              : "No pokemon"}
            {}
          </div>
        </div>
        <div className="pokedex__blueButtons_up">
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
        </div>
        <div className="pokedex__blueButtons_down">
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
          <div className="pokedex__blueButton"></div>
        </div>
        <div className="pokedex__miniButtonGlass_orange"></div>
        <div className="pokedex__miniButtonGlass_greeny"></div>
        <div className="pokedex__bar-button_left"></div>
        <div className="pokedex__bar-button_right"></div>
        <div className="pokedex__yellowBox_left"></div>
        <div className="pokedex__yellowBox_right"></div>
        <div className="pokedex__bg-curve1_right"></div>
        <div className="pokedex__bg-curve2_right"></div>
        <div className="pokedex__curve1_right"></div>
        <div className="pokedex__curve2_right"></div>
      </div>
    </section>
  );
}
export default Main;
