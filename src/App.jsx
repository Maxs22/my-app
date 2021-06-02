import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { MoviesDetails } from "./Pages/MoviesDetails";
import { LandingPage } from "./Pages/LandingPage";

export function App(){
    return (
    <Router>
        <header>
            <Link to="/"> 
                <h1 className={styles.title}>PelisAr</h1> 
            </Link>
        </header>
        <main>
            <Switch>
                <Route exact path="/movies/:movieId">
                    <MoviesDetails />
                    </Route>
                    <Route path="/"> 
                    <LandingPage /> 
                </Route>
            </Switch>
        </main>
    </Router>
  );
}