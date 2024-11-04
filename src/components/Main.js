import { useEffect, useState } from 'react';
import { getPokemonById, getPokemonByName } from '../utils/pokemons';
import Loading from './Loading';
import Modal from './Modal';
import PopupNotification from './PopupNotification';

function Main() {
  const [namePokemon, setNamePokemon] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [firtRun, setFirtRun] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [firstOpenModal, setFirstOpenModal] = useState(false);

  const audio = new Audio('/audio.mp3');

  const handleGetPokemon = async () => {
    try {
      setPokemon(null);
      setLoading(true);

      if (!namePokemon) {
        setLoading(false);
        return;
      }
      audio.play();
      const response = await getPokemonByName(namePokemon.toLowerCase());
      setTimeout(() => {
        setPokemon(response);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 2000);
    }
  };

  const handleGetPokemonById = async () => {
    try {
      setLoading(true);
      audio.play();
      const randomId = Math.floor(Math.random() * 1026) + 1;
      const pokemon = await getPokemonById(randomId);
      setTimeout(() => {
        setPokemon(pokemon);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setError(true);
        setNamePokemon('');
        setLoading(false);
      }, 2000);
      console.log(error.message);
    }
  };

  const returnPokemonImage = () => {
    return (
      pokemon?.sprites?.other?.showdown?.front_default ||
      pokemon?.sprites?.other?.dream_world?.front_default ||
      pokemon?.sprites?.other?.home?.front_default ||
      'https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80.jpg'
    );
  };

  const handleHiddenPopup = () => {
    setError(false);
  };

  useEffect(() => {
    if (firtRun) {
      setFirtRun(false);
      return;
    }

    const handler = setTimeout(() => {
      handleGetPokemon(namePokemon);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [namePokemon]);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width < 761 && !firstOpenModal) {
        setFirstOpenModal(true);
        setShowAlert(true);
      } else if (width > 760) {
        setFirstOpenModal(false);
        setShowAlert(false);
      }
    };

    updateSize();

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [firstOpenModal]);

  const handleCloseModal = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Modal active={showAlert} closeModal={handleCloseModal} />
      <section className="pokedex">
        {error && <PopupNotification show={error} hidden={handleHiddenPopup} />}
        <div className="pokedex__left-side">
          <div className="pokedex__search pokedex__search_left">
            <input
              value={namePokemon}
              onChange={(e) => {
                setNamePokemon(e.target.value);
              }}
              type="text"
              placeholder="Buscar Pokémon..."
              className="pokedex_search-input"
            />
          </div>

          <div className="pokedex__logo"></div>
          <div className="pokedex__bg-curve1_left"></div>
          <div className="pokedex__bg_curve2_left"></div>
          <div className="pokedex__curve1_left">
            <div className="pokedex__buttonGlass">
              <div className="pokedex__reflect"> </div>
            </div>
            <div className="pokedex__miniButtonGlass_red"></div>
            <div className="pokedex__miniButtonGlass_yellow"></div>
            <div className="pokedex__miniButtonGlass_green"></div>
          </div>
          <div className="pokedex__curve2_left">
            <div className="pokedex__junction">
              <div className="pokedex__junction_up"></div>
              <div className="pokedex__junction_down"></div>
            </div>
          </div>
          <div className="pokedex__screen">
            <div className="pokedex__top-picture">
              <div className="pokedex__buttontop-picture_right"></div>
              <div className="pokedex__buttontop-picture_left"></div>
            </div>
            <div className="pokedex__picture">
              {loading ? (
                <Loading />
              ) : (
                <img
                  className="pokedex__picture-img"
                  src={returnPokemonImage()}
                  alt="pokemon"
                  height="170"
                  /* width={230} */
                />
              )}
            </div>
            <div className="pokedex__buttonbottom-picture"></div>
            <div className="pokedex__speakers">
              <div className="pokedex__sp"></div>
              <div className="pokedex__sp"></div>
              <div className="pokedex__sp"></div>
              <div className="pokedex__sp"></div>
            </div>
          </div>
          <div className="pokedex__big-bluebutton"></div>
          <div className="pokedex__barbutton_left"></div>
          <div className="pokedex__barbutton_right"></div>
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
        </div>
        <div className="pokedex__right-side">
          <div className="pokedex__search">
            <input
              value={namePokemon}
              onChange={(e) => setNamePokemon(e.target.value)}
              type="text"
              placeholder="Buscar Pokémon..."
              className="pokedex_search-input"
            />
          </div>

          <div className="pokedex__stats">
            <strong>Name:</strong> {pokemon ? pokemon?.name : '---------------'}
            <br />
            <strong>Type:</strong>{' '}
            {pokemon ? `${pokemon?.types?.[0]?.type?.name}` : '---------------'}
            <br />
            <strong>Height:</strong>{' '}
            {pokemon ? pokemon?.height : '---------------'}
            <br />
            <strong>Weight:</strong>{' '}
            {pokemon ? pokemon?.weight : '---------------'}
            <br />
            <br />
            <strong>Habilites:</strong>
            <br />
            <div className="pokemon_stats_habilites">
              {pokemon
                ? pokemon?.abilities?.map((ability) => (
                    <div key={ability.ability.name}>{ability.ability.name}</div>
                  ))
                : '---------------'}
              {}
            </div>
          </div>
          <div className="pokedex__blueButtons_up">
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
          </div>
          <div className="pokedex__blueButtons_down">
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
            <div className="pokedex__blueButton"></div>
          </div>
          <div className="pokedex__miniButtonGlass_orange"></div>
          <div className="pokedex__miniButtonGlass_greeny"></div>
          <div className="pokedex__bar-button_left"></div>
          <div className="pokedex__bar-button_right"></div>
          <div className="pokedex__yellowBox_left"></div>
          <div className="pokedex__yellowBox_right"></div>
          <div className="pokedex__bg-curve1_right"></div>
          <div className="pokedex__bg-curve2_right"></div>
          <div className="pokedex__curve1_right"></div>
          <div className="pokedex__curve2_right"></div>
        </div>
      </section>
    </>
  );
}
export default Main;
