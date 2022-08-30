const key = 'f9fa4b59ff38d475c285437e7ff6e33e'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie/popular?api_key=${key}&language=en-US&query=horror&page=1`,
    requestUpcoing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests