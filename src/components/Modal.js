import '../blocks/modal.css';
import '../blocks/popup.css';

function Modal({ active, closeModal }) {
  return (
    <div className={`modal ${!active ? 'modal__hidden' : ''}`}>
      <button
        type="button"
        className="modal__close-button"
        onClick={closeModal}
      ></button>
      <div className="modal__info">
        <p>
          Para tener la experiencia completa del pókedex te recomendamos una
          pantalla mayor a 760px. Mientras tanto puedes buscar la imágen de tu
          Pokémon favorito
        </p>
      </div>
    </div>
  );
}

export default Modal;
