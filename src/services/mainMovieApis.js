import instance from "./baseRequest";

export const mainMovieApi = {
  getMovie: async () => instance.get("Featured"),
  getAllMovies: async (limit) => instance.get(`TendingNow?_limit=${limit}&_sort=Date&_order=desc`),
  getMovieById: async (id) => instance.get(`TendingNow?Id=${id}`),
}