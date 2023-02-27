import Card  from '../Card/Card.jsx';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   return <div className={styles.divCards}>
      {characters.length === 0 ?
      (  <div className={styles.divH3Cards}>
            <h3 className={styles.h3Cards}>¡Agrega un personaje con su ID o pulsa Random!</h3>
         </div>
      )
      
      :
      (characters.map((e) => (
         <Card 
         key = {i++}
         id = {e.id}
         name={e.name} 
         species={e.species} 
         gender={e.gender} 
         image={e.image} 
         onClose={()=> props.onClose(e.id)} 
         />
         )))}
   </div>;
}  
