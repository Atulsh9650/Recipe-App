import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const chineseFoodApi = createApi({
    reducerPath: 'chineseFoodApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://chinese-food-db.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', '1428c65caemsh7320f828195f114p1dfd6cjsn685fd908ac42'); 
        headers.set('x-rapidapi-host', 'chinese-food-db.p.rapidapi.com');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getRecipes: builder.query<allRecipetype[], void>({
        query: () => '',
      }),
      getRecipesbyId:builder.query<RecipeType,string>({
        query:(id)=>`${id}`,
      }),
    }),

  });

  export const {useGetRecipesQuery,useGetRecipesbyIdQuery}=chineseFoodApi;

 