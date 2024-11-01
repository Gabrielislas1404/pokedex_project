import pokemon from '../images/pokemonimage-popup.png';

function PopupNotification() {
  return (
    <div className="popup">
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button type="button" className="popup__close-button"></button>
        <h4 className="popup__text">
          Ups! El pokémon que estás buscando no está registrado en la pokédex o
          talvez no existe... por ahora!
        </h4>
        <img src={pokemon} className="popup__image" alt="pokemon" />
      </div>
    </div>
  );
}

export default PopupNotification;
