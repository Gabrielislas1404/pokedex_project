import headerLogo from '../images/pokedex-logo.png';
import pokeballImage from '../images/pokeball-image.png';
import { withRouter } from 'react-router-dom';

function Header({ history }) {
  const handleClick = () => {
    history.push('/about'); // Navegar a la ruta /about
  };
  return (
    <header className="header">
      <img src={pokeballImage} className="header__pokeball" alt="pokeball" />
      <div className="header__wrapper">
        <img src={headerLogo} className="header__logo" alt="pokedex-logo" />
        <button onClick={handleClick} className="header__button">
          Acerca del proyecto
        </button>
      </div>
      <img
        src={pokeballImage}
        className="header__pokeball_right"
        alt="pokeball"
      />
    </header>
  );
}

export default withRouter(Header);
