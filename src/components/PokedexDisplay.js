import { returnPokemonImage } from "../utils/PokedexImage";
import Loading from "./Loading";

function PokedexDisplay({ loading, pokemon }) {
  return (
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
            src={returnPokemonImage(pokemon)}
            alt={pokemon?.name}
            height="170"
            width={230}
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
  );
}

export default PokedexDisplay;
