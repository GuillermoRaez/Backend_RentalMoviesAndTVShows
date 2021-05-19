const axios = require("axios");

class TvShows {

    async findTopRated(){

        let res = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;

    }

    async searchByTitle (name){

        let res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${name}`)
        return res.data;
        
    }

    async searchById(id){

        let res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`)
        return res.data;

    }
}

let tvshowsController = new TvShows();
module.exports = tvshowsController;