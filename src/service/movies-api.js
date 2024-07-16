import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// By trend
export const fetchMoviesByTrend = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg3ZDBiNTQ0NjJkZGMwMTQ3MzZjNWRhNjMzYTFmMiIsIm5iZiI6MTcyMDgwMjMyNy42Mjg0ODIsInN1YiI6IjY2OGY5MjZiNGYzZDNjZWM4MWI2MzA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CI00Z9U0TFIeAgntrXz_ZZcVECCOkJgL38RYm-t9c38",
    },
  };

  const response = await axios.get("trending/movie/day", options);

  return response.data;
};
// By query
export const fetchMoviesByQuery = async (query) => {
  const options = {
    params: {
      query,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg3ZDBiNTQ0NjJkZGMwMTQ3MzZjNWRhNjMzYTFmMiIsIm5iZiI6MTcyMDgwMjMyNy42Mjg0ODIsInN1YiI6IjY2OGY5MjZiNGYzZDNjZWM4MWI2MzA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CI00Z9U0TFIeAgntrXz_ZZcVECCOkJgL38RYm-t9c38",
    },
  };

  const response = await axios.get("search/movie", options);

  return response.data;
};
// By id
export const fetchMoviesById = async (id) => {
  const url = `movie/${id}`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg3ZDBiNTQ0NjJkZGMwMTQ3MzZjNWRhNjMzYTFmMiIsIm5iZiI6MTcyMDgwMjMyNy42Mjg0ODIsInN1YiI6IjY2OGY5MjZiNGYzZDNjZWM4MWI2MzA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CI00Z9U0TFIeAgntrXz_ZZcVECCOkJgL38RYm-t9c38",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
};
// By id to fetch credits
export const fetchMoviesCredits = async (id) => {
  const url = `movie/${id}/credits`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg3ZDBiNTQ0NjJkZGMwMTQ3MzZjNWRhNjMzYTFmMiIsIm5iZiI6MTcyMDgwMjMyNy42Mjg0ODIsInN1YiI6IjY2OGY5MjZiNGYzZDNjZWM4MWI2MzA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CI00Z9U0TFIeAgntrXz_ZZcVECCOkJgL38RYm-t9c38",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
};
// By id to fetch reviews
export const fetchMoviesReviews = async (id) => {
  const url = `movie/${id}/reviews`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg3ZDBiNTQ0NjJkZGMwMTQ3MzZjNWRhNjMzYTFmMiIsIm5iZiI6MTcyMDgwMjMyNy42Mjg0ODIsInN1YiI6IjY2OGY5MjZiNGYzZDNjZWM4MWI2MzA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CI00Z9U0TFIeAgntrXz_ZZcVECCOkJgL38RYm-t9c38",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
};
