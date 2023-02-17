import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";


export function Card(props) {
   
   const [isFav, setIsFav] = useState(false);

   function handleFavorite() {
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.id);
         
         
      }else{
         setIsFav(true);
         props.addFavorite(props);
         
         
      }
   };

   useEffect(() => {
      props.myFavorites && props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);


   return (
      <div className={styles.divCard}>
         <img src={props.image} alt="" />
        
         <button className={styles.buttonX} onClick={props.onClose}>X</button>   
         {isFav ? (<button onClick={handleFavorite}>❤️</button>)
                : (<button onClick={handleFavorite}>🤍</button>)
         }  
            <div className={styles.divCardInfo} >
               <Link className={styles.aNameCard} to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>  
                  <div className ={styles.contenedorH2}>
                     <h2 className={styles.hCard}>{props.species}</h2>
                     <h2 className={styles.hCard}>{props.gender}</h2>
                  </div>
            </div>
      </div>
   );
}
////no esta funcionando esta funcion!!!!!! arreglar!!!!!
export function mapDispatchToProps(dispatch){
   return{
      addFavorite: function(fav){
         dispatch(addFavorite(fav))
      },

      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }

};

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
