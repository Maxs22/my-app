import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../Hooks/UseQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const [searchtext, setsearchText] = useState();
    const history = useHistory();

    useEffect(() => {
        setsearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchtext);

    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} 
                type="text" 
                value={searchtext} 
                onChange={(e) => setsearchText(e.target.value)} 
                />
                <button className={styles.searchButton}type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    );
}
