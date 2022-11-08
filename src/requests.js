const API_KEY = "c40460b3939d5e4834ad1b19b182eba0";

const requests = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
};

export default requests;
