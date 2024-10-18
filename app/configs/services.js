import { get, post } from './networking';

// end point
export const endpoint = {
  // getListUser: async page => get(`/users?page=${page}`),
  getMovieList: async () => get('/movie/now_playing?api_key=636a5bc079cdcb020265e95b1a6479f5'),
  getDetailMovie: async (params) => get(`/movie/${params.id}?api_key=636a5bc079cdcb020265e95b1a6479f5`),
  getReviewMovie: async (params) => get(`/movie/${params.id}/reviews?api_key=636a5bc079cdcb020265e95b1a6479f5`)
//   getUserById: async () => get(`api/users/v1`),
//   login: async params => post('api/users/v1/login', params),
//   register: async params => post('api/users/v1/register', params),
//   quiz: async () => get('api/quiz/v1'),
//   answerQuiz: async params => post('api/quiz/v1/check', params),
//   ujian: async () => get('api/ujian/v1'),
//   answerUjian: async params => post('api/ujian/v1/check', params)
};

export default { endpoint };