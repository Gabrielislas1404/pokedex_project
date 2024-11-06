export default function PokedexStats({ pokemon }) {
  return (
    <div className="pokedex__stats">
      <strong>Name:</strong> {pokemon ? pokemon?.name : "---------------"}
      <br />
      <strong>Type:</strong>{" "}
      {pokemon ? `${pokemon?.types?.[0]?.type?.name}` : "---------------"}
      <br />
      <strong>Height:</strong> {pokemon ? pokemon?.height : "---------------"}
      <br />
      <strong>Weight:</strong> {pokemon ? pokemon?.weight : "---------------"}
      <br />
      <br />
      <strong>Habilites:</strong>
      <br />
      <div className="pokemon_stats_habilites">
        {pokemon
          ? pokemon?.abilities?.map((ability) => (
              <div key={ability.ability.name}>{ability.ability.name}</div>
            ))
          : "---------------"}
        {}
      </div>
    </div>
  );
}
