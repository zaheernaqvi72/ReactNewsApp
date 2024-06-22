import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './reducers/articles';

const rootReducer = {
  articles: articlesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;