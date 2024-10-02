import React from "react";
import "./home.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { FoodListing } from "./foodListing";
import { useDispatch } from "react-redux";
import { addFood } from "../features/foodSlice";
export const Home = () => {
    const dispatch = useDispatch();
const [products, setProducts] = useState([]);
    const getMovies = async () => {
     debugger
        try{
            const response = await axios.get("https://dummyjson.com/recipes"); 
            // const beverageRecipes = response?.data?.recipes?.filter(recipe => recipe.mealType.includes("Beverage"));
            
            // console.log(beverageRecipes);
            setProducts(response.data.recipes);
          dispatch(addFood(response.data.recipes));
        }
        catch(error){
            console.log("error",error);
        }
       
    }
    useEffect(()=>{   
        getMovies();
    },[]);         
    return (
        <>
        {products.length>0&&<FoodListing/>}
        </>  
    )
}
