import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Link, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ArticleDetail.css';

const ArticleDetail = ({ article }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    const isArticleFavorite = favorites.some(fav => fav.title === article.title);
    setIsFavorite(isArticleFavorite);
  }, [favorites, article]);

  const toggleFavorite = () => {
    if (!isFavorite) {
      const updatedFavorites = [...favorites, article];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = favorites.filter(fav => fav.title !== article.title);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <Grid container justifyContent="center" className="article-detail-container">
      <Grid item xs={20} sm={18} md={16} lg={14}>
        <Card>
          {article.urlToImage && (
            <CardMedia
              component="img"
              height="auto"
              image={article.urlToImage}
              alt={article.title}
              className="article-image"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3" className='article-title'>
              {article.title}
              
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.author} - {new Date(article.publishedAt).toLocaleDateString()}
              
            </Typography>
            <Typography variant="body1" component="p" style={{ marginTop: '20px' }}>
              {article.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: '20px' }}>
              {article.content}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
              Source: <Link href={article.url} target="_blank" rel="noopener noreferrer">{article.source.name}</Link>
              </div>
              <IconButton onClick={toggleFavorite} color="primary" aria-label="add to favorites">
              {isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
            </IconButton>
            </Typography>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ArticleDetail;
