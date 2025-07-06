import MovieCard from "../components/MovieCard.jsx";
import {useState, useEffect} from "react";
import '../css/Home.css'
import {getPopularMovies, searchMovies} from "../services/api.js";

function Home() {

    const [filter, setFilters] = useState({
        title: '',
        release_year: ''
    });
    const [filteredMovies, setFilteredMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            const loadPopularMovies = async () => {
                try {
                    const popularMovies = await getPopularMovies();
                    setFilteredMovies(popularMovies);
                    setError(null);
                } catch (err) {
                    setError("Error")
                } finally {
                    setLoading(false)
                }
            }

            loadPopularMovies()
        }
        ,
        []
    )


    const filterHandler = async (e) => {
        setError(null)
        e.preventDefault();

        console.log(filter)

        if (!filter.title.trim()) return;
        if (loading) return;

        setFilteredMovies([])

        setLoading(true);

        try {
            const filteredMovies = await searchMovies(filter);
            setFilteredMovies(filteredMovies);
        } catch (err) {
            setError("Error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="home">
            <div className="filters">
                <form onSubmit={filterHandler} className="filter-form">
                    <input type="text"
                           title="Title"
                           placeholder="Title"
                           className="movie-title-filter"
                           value={filter.title}
                           onChange={(e) => setFilters(prev => ({
                               ...prev,           // keep the existing fields
                               title: e.target.value  // overwrite only the `title` field
                           }))}
                    />

                    <input type="text"
                           title="ReleaseYear"
                           placeholder="Release Year"
                           className="movie-title-filter"
                           value={filter.release_year}
                           onChange={(e) => setFilters(prev => ({
                               ...prev,           // keep the existing fields
                               release_year: e.target.value   // overwrite only the `title` field
                           }))}
                    />

                    <button type="submit" className="filter-submit">Submit</button>
                </form>
            </div>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">loading...</div> : <div className="movies-grid">
                {filteredMovies.map((movie) =>
                    <MovieCard movie={movie} key={movie.id}/>)}
            </div>}

        </div>


    )
}


export default Home