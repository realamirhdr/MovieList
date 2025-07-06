import {createContext, useContext, useState, useEffect} from "react";
import Favorites from "../pages/Favorites.jsx";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem("favorite-movies");

        if (storedFavorites) return JSON.parse(storedFavorites);
    });

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorite-movies");

        if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
    }, [])

    useEffect(() => {
        localStorage.setItem("favorite-movies", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(m => m.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(m => m.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value = {value} >
        {children}
    </MovieContext.Provider>
}
