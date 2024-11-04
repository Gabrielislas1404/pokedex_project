import pokemons from '../images/pokemons.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <h1 className="about__title">Acerca del proyecto</h1>
        <h4 className="about__text">
          Esta página ha sido desarrollada como una Pokédex interactiva para
          poner en práctica mis habilidades de frontend. El proyecto utiliza
          metodología BEM junto con HTML, JSX, CSS, JavaScript y React, y está
          conectada a la API de{' '}
          <a href="https://pokeapi.co" target="_blank">
            PokeAPI
          </a>{' '}
          para ofrecer información en tiempo real sobre diferentes Pokémon. Es
          una aplicación completa que demuestra mis conocimientos y experiencia
          en desarrollo web.
        </h4>
        <h2 className="about__subtitle">Funciones del pokédex</h2>
        <h4 className="about__text">
          El diseño del Pokédex en CSS está optimizado para resoluciones
          superiores a 760 px. Sin embargo, en dispositivos con resoluciones
          menores, podrás buscar cualquier Pokémon, pero solo se mostrará su
          imagen o animación, sin acceso a más información. La barra de búsqueda
          permite ingresar el nombre de cualquier Pokémon y comenzará la
          búsqueda automáticamente, sin necesidad de un botón adicional. Si no
          tienes un Pokémon en mente, puedes usar la cruceta negra: al presionar
          cualquiera de sus botones, aparecerá un personaje aleatorio.{' '}
          <h4 className="about__text_ending">¡Te invito a que lo pruebes!</h4>
        </h4>
        <img src={pokemons} className="about__image" alt="pokemons" />
      </div>
      <Link to="/" className="about__link">
        Regresar a la página principal
      </Link>
    </div>
  );
}

export default About;
