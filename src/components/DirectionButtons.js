function DirectionButtons({ handleGetPokemonById }) {
  return (
    <div className="pokedex__cross">
      <div className="pokedex__leftcross" onClick={handleGetPokemonById}>
        <div className="pokedex__leftT"></div>
      </div>
      <div className="pokedex__topcross" onClick={handleGetPokemonById}>
        <div className="pokedex__upT"></div>
      </div>
      <div className="pokedex__rightcross" onClick={handleGetPokemonById}>
        <div className="pokedex__rightT"></div>
      </div>
      <div className="pokedex__midcross">
        <div className="pokedex__midCircle"></div>
      </div>
      <div className="pokedex__botcross" onClick={handleGetPokemonById}>
        <div className="pokedex__downT"></div>
      </div>
    </div>
  );
}

export default DirectionButtons;
