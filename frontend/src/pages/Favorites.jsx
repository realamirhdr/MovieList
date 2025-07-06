import '../css/Favorites.css'
import {useMovieContext} from "../context/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {
    const {favorites} = useMovieContext()

    console.log(favorites)

    if (favorites) {
        return <div>
            Your Favorite Movies
            <div className="movies-grid">
                {favorites.map((movie) =>
                    <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    }


    return <div className="favorites-empty">
        <h2>No Favorites</h2>
        <p>Ass</p>
    </div>
}

export default Favorites