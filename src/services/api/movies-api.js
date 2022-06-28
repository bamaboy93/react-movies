import axios from "axios";

const API_KEY = "a7722589dc29fac056c18bf39b029797";
const BASE_URL = "https://api.themoviedb.org/3/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
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
    console.log("error", { error });
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
        query,
        page,
      },
    };
    const { data } = await axios(config);

    return data.results;
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

    return data.results;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

const api = {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMoviesByQuery,
  getMovieById,
  getCastInfo,
  getMovieVideo,
  getMovieImages,
};

export default api;
