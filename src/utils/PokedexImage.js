export const returnPokemonImage = (pokemon) => {
  return (
    pokemon?.sprites?.other?.showdown?.front_default ||
    pokemon?.sprites?.other?.dream_world?.front_default ||
    pokemon?.sprites?.other?.home?.front_default ||
    "https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80.jpg"
  );
};
