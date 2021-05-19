const axios = require('axios');

class Movies {

    async findTopRated() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

    async findMoviesById(id) {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
    }

    async findMoviesByTitle(title) {
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${title}`);
        return res.data;
    }

    async findMoviesGenreByName(genreArray) {
        let res = await axios.get(`https://api.themoviedb.org/3/${genreArray}/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
    }

}

let moviesController = new Movies();
module.exports = moviesController;