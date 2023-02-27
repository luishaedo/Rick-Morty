import { useParams } from "react-router-dom";
import styles from './Detail.module.css'
import { useState , useEffect } from "react";

export default function Detail(){

    const { detailId } = useParams();

    const [character, setCharacter] = useState({
        name: "",
        status:"",
        specie: "",
        gender: "",
        origin: "",
        image: "",
    })

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
                name: char.name,
                status:char.status,
                specie: char.specie,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image,
                }
              );
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div className={styles.divDetail}>
            <ol className={styles.olDetail}>
             <li className={styles.liDetail}>Nombre:<b>{character.name}</b></li>
              {(character.status) && <li className={styles.liDetail}>Estado:<b>{character.status}</b></li>}
              {(character.specie) && <li className={styles.liDetail}>Especie:<b>{character.specie}</b></li>}
              {(character.gender) && <li className={styles.liDetail}>Genero:<b>{character.gender}</b></li>}
              {(character.origin) && <li className={styles.liDetail}>Origen:<b>{character.origin}</b></li>}
            </ol>
            <img className={styles.imgDetail} src={character.image} alt=""/>
        </div>
    )
}