import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions.jsx";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

export function Card(props) {
   
   const [isFav, setIsFav] = useState(props.fav);

   useEffect(() => {
      console.log("Checking if card is a favorite...");
      props.myFavorites &&
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   },[]);

   function handleFavorite() {
      if (isFav) {
         console.log("Deleting favorite...");
        setIsFav(false);
        props.deleteFavorite(props.id);
      } else {
         console.log("Adding favorite...");
        setIsFav(true);
        props.addFavorite({
          name: props.name,
          species: props.species,
          gender: props.gender,
          image: props.image,
          id: props.id,
        });
      }
    }

   return (
      <div className={styles.divCard}>
         <img src={props.image} alt="" />
            <div className={styles.divCardContainer}>
               {isFav ? (<button className={styles.buttonFav} onClick={handleFavorite}>❤️</button>)
                     : (<button className={styles.buttonFav} onClick={handleFavorite}>🤍</button>)
               } 
               <button className={styles.buttonX} onClick={props.onClose}>X</button>
               <div className={styles.divCardText}>
                  <Link to={`/detail/${props.id}`}>
                     <h2>{props.name}</h2>
                  </Link>
                  <h2>{props.species}</h2>
                  <h2>{props.gender}</h2> 
               </div>
            </div>       
      </div>
   );
}



export function mapDispatchToProps(dispatch) {
   console.log("dispach fav")
   return {
      addFavorite: function(fav) {
         dispatch(addFavorite(fav));
      },
      
      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      },
   };
   
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
