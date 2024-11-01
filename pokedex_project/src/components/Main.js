import { useState } from "react";
import { getPokemonByName } from "../utils/pokemons";
import PopupNotification from "./PopupNotification";

function Main() {
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleGetPokemon = async () => {
    try {
      const response = await getPokemonByName(namePokemon.toLowerCase());
      setPokemon(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="pokedex">
      <div className="pokedex__left-side">
        <div className="pokedex__logo"></div>
        <div className="pokedex__bg-curve1_left"></div>
        <div className="pokedex__bg_curve2_left"></div>
        <div className="pokedex__curve1_left">
          <div className="pokedex__buttonGlass">
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
            {!pokemon ? (
              <img
                className="pokedex__picture-img"
                src="https://ih1.redbubble.net/image.1756098780.0530/fpp,small,lustre,wall_texture,product,750x1000.jpg"
                alt="psykokwak"
                height="170"
              />
            ) : (
              <img
                className="pokedex__picture-img"
                src={
                  pokemon?.sprites?.other?.showdown?.front_default ||
                  pokemon?.sprites?.other?.dream_world?.front_default
                }
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
          <div className="pokedex__leftcross">
            <div className="pokedex__leftT"></div>
          </div>
          <div className="pokedex__topcross">
            <div className="pokedex__upT"></div>
          </div>
          <div className="pokedex__rightcross">
            <div className="pokedex__rightT"></div>
          </div>
          <div className="pokedex__midcross">
            <div className="pokedex__midCircle"></div>
          </div>
          <div className="pokedex__botcross">
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
          <strong>Name:</strong> {pokemon?.name}
          <br />
          <strong>Type:</strong> {pokemon?.types?.[0]?.type?.name}
          <br />
          <strong>Height:</strong> {pokemon?.height}
          <br />
          <strong>Weight:</strong> {pokemon?.weight}
          <br />
          <br />
          <strong>habilites</strong>
          <br />
          <div className="pokemon_stats_habilites">
            {pokemon?.abilities?.map((ability) => (
              <div key={ability.ability.name}>{ability.ability.name}</div>
            ))}
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
