import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../store/actions/articles';
import { Grid, CircularProgress, Container, Typography } from '@mui/material';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const { articles: allArticles, loading, totalResults } = useSelector(state => state.articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const pageSize = 12;

  useEffect(() => {
    dispatch(fetchArticles(currentPage, selectedCategory, searchQuery));
  }, [dispatch, currentPage, selectedCategory, searchQuery]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'favorites'
    ? favorites
    : allArticles;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
            News Portal
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBar onSearch={handleSearch} />
        </Grid>
        <Grid item xs={12}>
          <CategoryFilter
            categories={['all', 'favorites', 'business', 'health', 'science', 'technology', 'entertainment', 'sports']}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <Grid container justifyContent="center">
              <CircularProgress />
            </Grid>
          ) : (
            <ArticleList articles={filteredArticles} favorites={favorites} />
          )}
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          {totalResults > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / pageSize)}
              onPageChange={handlePageChange}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
