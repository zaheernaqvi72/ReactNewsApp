import React from 'react';
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSelectCategory = (category) => {
    if (category === 'favorites') {
      onSelectCategory(category);
    } else {
      onSelectCategory(category);
    }
  };

  return (
    <Grid container justifyContent={'center'}>
      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        lg={8}
        xl={6}
        fullWidth={!isMobile}
        variant="outlined"
        color="secondary"
        aria-label="category button group"
        style={{
          display: 'flex',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          justifyContent: isMobile ? 'center' : 'space-evenly',
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleSelectCategory(category)}
            style={{
              border: '0.1rem solid black',
              height: isMobile ? '20px' : '25px',
              backgroundColor:
                selectedCategory === category ? theme.palette.secondary.main : null,
              color:
                selectedCategory === category
                  ? theme.palette.common.white
                  : theme.palette.text.primary,
              transition: 'background-color 0.3s, color 0.3s',
              margin: '4px',
              fontSize: isMobile ? '8px' : '12px',
              fontWeight: '550',
              borderRadius: isMobile ? '8px' : '15px',
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryFilter;
