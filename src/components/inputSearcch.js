function InputSearch({ namePokemon, onChangeValue }) {
  return (
    <input
      value={namePokemon}
      onChange={(e) => {
        onChangeValue(e.target.value);
      }}
      type="text"
      placeholder="Buscar Pokémon..."
      className="pokedex_search-input"
    />
  );
}

export default InputSearch;
