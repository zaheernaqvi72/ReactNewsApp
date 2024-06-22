import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetailsPage from './pages/ArticleDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:articleUrl" element={<ArticleDetailsPage />} />
    </Routes>
  );
};

export default App;