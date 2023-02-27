import styles from "./SearchBar.module.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function SearchBar(props) {
   const [character, setCharacter] = useState(0);
   
   const handleSearch =(e) =>{
      let { value } = e.target;
      setCharacter(value);
   }

   return (
      <div className={styles.divBar} >
         <input   className={styles.inputBar} 
                  type='search' 
                  onChange={handleSearch}
          />
         <button  className={styles.buttonBar} 
                  onClick={() => props.onSearch(character)}>
                  Agregar
         </button>
         <button  className={styles.buttonBar}
                  onClick={props.random}>
                  Random
         </button>
         <Link  className={styles.links}
                  to = '/Favorites'>
                  Favorites
         </Link>
         <Link className={styles.links}
               to = '/Home'>
               Home
         </Link>
         <Link className={styles.links}
               to = '/About'>
               About
         </Link>
         <button  className={styles.buttonBar}
                  onClick={props.logOut}>
                  Logout
         </button>

      </div>
   );
}
