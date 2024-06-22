import axios from 'axios';

export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticles = (page = 1, category = 'all', query = '') => {
  const apiKey = 'e3421233278c4b028ddb2656e4fd9fb3';
  const pageSize = 12;
  const categoryParam = category === 'all' ? '' : `&category=${category}`;
  const queryParam = query ? `&q=${query}` : '';
  const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}${categoryParam}${queryParam}&apiKey=${apiKey}`;

  return async dispatch => {
    try {
      const response = await axios.get(url);
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: {
          articles: response.data.articles,
          totalResults: response.data.totalResults
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_ARTICLES_FAILURE,
        payload: error.message
      });
    }
  };
};
