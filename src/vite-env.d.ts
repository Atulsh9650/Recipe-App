/// <reference types="vite/client" />


type RecipeType = {
    id: string;
    title: string;
    difficulty: string;
    portion: string;
    time: string;
    description: string;
    ingredients: string[];
    method: { [key: string]: string }[]; 
    image: string;
}

type allRecipetype={
    id:string,
    title:string,
    difficulty:string,
    image:string
}

interface StateType{
    loading:boolean,
    error?:string,
    allrecipes:allRecipetype[],
    recipeitem:recipetype
}