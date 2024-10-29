import pokemons from '../images/pokemons.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <h1 className="about__title">Acerca del proyecto</h1>
        <h2 className="about__text">
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
        </h2>
        <img src={pokemons} className="about__image" alt="pokemons" />
      </div>
      <Link to="/" className="about__link">
        Regresar a la página principal
      </Link>
    </div>
  );
}

export default About;
