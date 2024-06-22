import { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from '../actions/articles';

const initialState = {
  articles: [],
  loading: true,
  error: null,
  totalResults: 0
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        totalResults: action.payload.totalResults,
        loading: false,
        error: null
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default articlesReducer;
