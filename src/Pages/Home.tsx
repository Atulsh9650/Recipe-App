import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useGetRecipesQuery } from '../store/Recipeapi';
import Loader from '../components/Loader';


const Home: React.FC = () => {
  const navigate = useNavigate();


  const { data, error, isError, isFetching } = useGetRecipesQuery();

  
  if (isFetching) {
    return (
      <Box sx={{ height: "100vh" }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Loader />
      </Box>
    );
  }


  if (isError) {
    return (
      <Box sx={{ height: "100vh" }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant='h4' color="error">There is an error: {error.toString()}</Typography>
      </Box>
    );
  }


  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom color="red" textAlign="center">
        Recipe List
      </Typography>
      <Grid container spacing={4}>
        {data?.map((recipe: allRecipetype) => (
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
            <Card sx={{ maxWidth: 345, height: "100%", display: 'flex', flexDirection: 'column', borderRadius: "20px" }} elevation={3}>
              <CardMedia
                component="img"
                sx={{ height: { xs: "150px", sm: "200px", md: "250px", lg: "300px" } }}
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Difficulty: {recipe.difficulty}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' color='success' size="small" onClick={() => navigate(`/receipebyid?id=${recipe.id}`)}>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
