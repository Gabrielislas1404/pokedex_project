export const getPokemonByName = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.error(error);
    throw new Error("Error Pokémon no encontrado");
  }
};
