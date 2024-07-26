import { useNavigate, useSearchParams } from 'react-router-dom'
import { Box, Typography, List, ListItem, ListItemText, Grid, Icon, Button } from '@mui/material';
import Loader from '../components/Loader';
import { useGetRecipesbyIdQuery } from '../store/Recipeapi';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const RecipeItem = () => {

  const params = useSearchParams()[0];
  const recipeId = params.get('id') || '';
  const navigate=useNavigate();

  const { data, error, isError, isFetching } = useGetRecipesbyIdQuery(recipeId);

  
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
        <Typography variant='h4' color="error">There is an error: {error?.toString()}</Typography>
      </Box>
    );
  }

  if (!data) {
    return (
      <Typography variant="h6" align="center">Loading...</Typography>
    );
  }

  return (
    <Box sx={{ padding: '20px', width: "100%", margin: '10px 0px' }}>
      <Grid container flexGrow={"1"} spacing={"1rem"}>
        <Grid item xs={12} sm={8} md={6} >
        <Button onClick={()=>navigate('/')} variant="contained" sx={{width:"150px",padding:"10px",marginBottom:"10px",borderRadius:"10px"}} startIcon={<ArrowBackIcon />}>
          Home
       </Button>
        <Typography variant="h4" fontWeight={"bolder"} sx={{fontSize:{xs:"20px",md:"30px"}}} gutterBottom>
        Dish Name - <span style={{textDecoration:"underline"}}>{data.title}</span>
      </Typography>
      <img src={data.image} alt={data.title} width="80%" height="400px" style={{ borderRadius: "20px" }} />
        </Grid>

        <Grid item xs={12} sm={4} md={6} display={"flex"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {data.difficulty} • {data.portion} • {data.time}
      </Typography>

      <Typography variant="body1" paragraph>
        {data.description}
      </Typography>
        </Grid>
      </Grid>
     
      <Typography variant="h5" gutterBottom>
        Ingredients
      </Typography>
      <List>
        {data.ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" gutterBottom>
        Method
      </Typography>
      <List>
        {data.method.map((step, index) => {
          const stepKey = Object.keys(step)[0];
          const stepDescription = step[stepKey];
          return (
            <ListItem key={index}>
              <ListItemText
                primary={stepKey}
                secondary={stepDescription}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default RecipeItem;
