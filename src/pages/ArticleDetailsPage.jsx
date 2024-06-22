import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Typography, Container } from '@mui/material';
import ArticleDetail from '../components/ArticleDetail';

const ArticleDetailsPage = () => {
  const { state } = useLocation();
  const { article } = state || {};

  if (!article) {
    return (
      <Container>
        <Typography variant="h6" component="p">Article not found</Typography>
      </Container>
    );
  }

  return (
    <Grid container justifyContent="center" style={{ marginTop: 20 }}>
      <Grid item xs={12} sm={10} md={8}>
        <ArticleDetail article={article} />
      </Grid>
    </Grid>
  );
};

export default ArticleDetailsPage;