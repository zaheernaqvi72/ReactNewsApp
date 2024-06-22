import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/article/${encodeURIComponent(article.url)}`}>
        <CardMedia
          component="img"
          height="100"
          image={article.urlToImage}
          alt={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.publishedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Article;