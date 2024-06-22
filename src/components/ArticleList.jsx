import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

const ArticleList = ({ articles, selectedCategory }) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (article) => {
    const isFavorite = favorites.some((fav) => fav.url === article.url);
    let updatedFavorites = [];

    if (!isFavorite) {
      updatedFavorites = [...favorites, article];
    } else {
      updatedFavorites = favorites.filter((fav) => fav.url !== article.url);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleClick = (article) => {
    navigate(`/article/${encodeURIComponent(article.url)}`, { state: { article } });
  };

  // Filter articles based on selectedCategory
  const filteredArticles = selectedCategory === 'favorites'
    ? articles.filter(article => favorites.some(fav => fav.url === article.url))
    : articles;

  return (
    <Grid container spacing={3}>
      {filteredArticles.map((article) => (
        <Grid item key={article.url} xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={() => handleClick(article)}>
              <CardMedia
                component="img"
                height="200"
                image={article.urlToImage || 'https://via.placeholder.com/200'}
                alt={article.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {article.title.length > 40 ? `${article.title.substring(0, 60)}...` : article.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                onClick={() => toggleFavorite(article)}
                aria-label="add to favorites"
              >
                {favorites.some((fav) => fav.url === article.url) ? (
                  <FavoriteIcon style={{ color: 'red' }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleList;
