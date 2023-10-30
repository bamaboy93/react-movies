import axios from "axios";

const API_KEY = "dbdfd2e04eca60ba57cf8be6150242f5";
const BASE_URL = "https://api.themoviedb.org/3/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
  include_image_language: "en,null",
};

////////////////////////Popular
async function getPopularMovies(page) {
  try {
    const config = {
      url: `/movie/popular`,
      params: { page },
    };
    const { data } = await axios(config);

    return data;
  } catch (error) {
    return;
  }
}

//////////////////// Top_Rated
async function getTopRatedMovies(page) {
  try {
    const config = {
      url: `/movie/top_rated`,
      params: { page },
    };
    const { data } = await axios(config);

    return data;
  } catch (error) {
    return null;
  }
}
////////////////////// Upcoming
async function getUpcomingMovies(page) {
  try {
    const config = {
      url: `/movie/upcoming`,
      params: { page },
    };
    const { data } = await axios(config);

    return data;
  } catch (error) {
    return null;
  }
}
///////////////////////// SearchQuery
async function getMoviesByQuery(query, page) {
  try {
    const config = {
      url: `search/movie`,
      params: {
        page,
        query,
      },
    };
    const { data } = await axios(config);

    return data;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}
////////////////////// Single Movie
async function getMovieById(id) {
  try {
    const config = {
      url: `movie/${id}`,
    };
    const { data } = await axios(config, id);

    return data;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}
/////////////////////////////// Sorted Movies
async function getSortedMovies(genre, page = 1) {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
    const { data } = await axios(url);

    return data;
  } catch (error) {
    return;
  }
}

//////////////////////////// Cast
async function getCastInfo(id) {
  try {
    const config = {
      url: `movie/${id}/credits`,
    };
    const { data } = await axios(config, id);

    return data.cast;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}
//////////////////////////// Genres
async function getGenres() {
  try {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const { data } = await axios(url);

    return data.genres;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}
////////////////////////////// Trailers
async function getMovieVideo(id) {
  try {
    const config = {
      url: `movie/${id}/videos`,
    };
    const { data } = await axios(config, id);

    return data.results;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}
//////////////////////////// Images
async function getMovieImages(id) {
  try {
    const config = {
      url: `movie/${id}/images`,
    };
    const { data } = await axios(config, id);

    return data.backdrops;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

export {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getMoviesByQuery,
  getMovieById,
  getCastInfo,
  getGenres,
  getMovieImages,
  getMovieVideo,
  getSortedMovies,
};
