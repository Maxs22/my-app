import { useEffect, useState } from "react";
import { useQuery } from "../Hooks/UseQuery";
import { get } from "../utils/httpClient";
import { MoviesCard } from "./MoviesCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";

export function MoviesGrid () {
  const [movies, setMovies] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  

  useEffect(() => {
    setIsLoding(true);
    const searchUrl = search
     ?"/search/movie?query=" + search
     :"/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoding(false);
    });
  }, [search]);

      if (isLoding) {
        return <Spinner />
      }

    
    return (
        <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
    </ul>
    );
}