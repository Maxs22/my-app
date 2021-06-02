import { Link } from "react-router-dom";
import styles from "./MoviesCard.module.css"

export function MoviesCard({ movie }) {
    console.log(styles);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
    <li className={styles.MoviesCard}>
        <Link to={"/movies/" + movie.id}>
        <img 
         width={230}
         height={345}
         className= {styles.moviesImage} 
         src={imageUrl} 
         alt={movie.title} 
         />
        <div>{movie.title}</div>
        </Link>
        </li>
    );
}