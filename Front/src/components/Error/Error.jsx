import styles from './Error.module.css'

export default function Error() {
    return (
        <div className={styles.divError}>
            <h1 className={styles.h1Error}> Página no encontrada </h1>
            <h3 className={styles.h3Error}> ERROR 404 </h3>
        </div>
    )
}