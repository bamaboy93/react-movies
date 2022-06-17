import axios from "axios";

const API_KEY = "a7722589dc29fac056c18bf39b029797";
const BASE_URL = "https://api.themoviedb.org/3/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

async function getPopularMovies(page) {
  try {
    const config = {
      url: `trending/movie/day`,
      params: {
        page,
      },
    };
    const { data } = await axios(config, page);

    return data;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

async function getUpcomingMovies() {
  try {
    const config = {
      url: `/movie/upcoming`,
    };
    const { data } = await axios(config);

    return data.results;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

async function getMoviesByQuery(query, page) {
  try {
    const config = {
      url: `search/movie`,
      params: {
        query,
        page,
      },
    };
    const { data } = await axios(config, query, page);

    return data.results;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
}

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
  getUpcomingMovies,
  getMoviesByQuery,
  getMovieById,
  getCastInfo,
  getMovieVideo,
  getMovieImages,
};

export default api;
