import styles from './About.module.css'

export default function About() {
    return(
        <div className={styles.divConteinerAbout}>
            {/* <button className= {styles.buttonVolver}>Volver</button> */}
            <h3 className={styles.h3About}>Hecho por </h3>
            <img className='imgAbout' src= "https://live.staticflickr.com/65535/52684899295_db998a9432_n.jpg" alt="Mi foto"/>
            <h3 className={styles.h3About}>Luis Haedo</h3>
        </div>
    )
};
