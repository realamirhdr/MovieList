const API_KEY = "your-api-key" // get it from themoviedb.org
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${encodeURIComponent(API_KEY)}`);
    const data = await res.json()
    return data.results
}


export const searchMovies = async (filter) => {
    var uri = `${BASE_URL}/search/movie?api_key=${API_KEY}`

    if (filter.title) {
        uri += `&query=${filter.title}`;
    }

    const res = await fetch(uri);
    let data = await res.json()

    if (filter.release_year) {
        data.results = data.results.filter(x => x.release_date.split('-')[0] === filter.release_year)
    }

    const end = data;
    return end.results
}