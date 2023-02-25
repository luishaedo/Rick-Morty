import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import {deleteFavorite } from '../../redux/actions/actions'
import styles from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useRef } from "react";

export function Favorites () {
  const myFavorites = useSelector(state => state.myFavorites);
  
  const filter = useRef(null);
  
  const order = useRef(null);
  
  const dispatch = useDispatch();

  const removeFavorite = (id) => {
    dispatch(deleteFavorite(id));
  }

  function handleReset(e) {
    dispatch({ type: "RESET" });
    filter.current.value = "";
    order.current.value = "";
  }

  return(
    <>
      <select className={styles.select}
        ref={order}
        onChange={(e) => dispatch(orderCards(e.target.value))}
      >
        {["Ascendente", "Descendente"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <select
        className={styles.select}
        ref={filter}
        onChange={(e) => dispatch(filterCards(e.target.value))}
      >
        {["Male", "Female", "unknown", "Genderless"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>

      <button className={styles.buttonReset} value="reset" onClick={handleReset}>
        Reset
      </button>

      <div>
        { myFavorites.length > 0 ?
          (myFavorites.map((fav,i) =>
          <Card 
            name={fav.name}
            id={fav.id}
            key={i}
            gender={fav.gender}
            image={fav.image}
            onClick={() => removeFavorite(fav.id)}
          />
          )) : (  <div className={styles.divH3Cards}>
                      <h3 className={styles.h3Cards}>No tienes ningún favorito. Primero selecciona algún personaje como favorito.</h3>)
                  </div>
              )
        }
      </div>
    </>  
  )
}