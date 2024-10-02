import React from "react";
import { getAllFoodList } from "../features/foodSlice";
import { useSelector } from "react-redux";
export const FoodListing = () => {
  debugger
  const recipies = useSelector(getAllFoodList)
    return (
        <React.Fragment>
        <div className="row">
          {recipies?.map((recipie) =>         
            <div className="col-md-4"key={recipie.id}>
            <img src={recipie.image} alt={recipie.image} /> 
            <h3>{recipie.name}</h3>
            <h6><b>Ingredients</b></h6>
            {recipie.ingredients}
            <p><b>{recipie.mealType}</b></p>
            <p>Serve For {recipie.servings} Members</p>
            <div className="">
                <p><b>Calories</b> {recipie.caloriesPerServing}</p>
            </div>
             <button className="btn btn-primary">Add Cart</button>
            </div>
          )}
        </div>
        <div>
            {/* <button onClick={fngetData}>Get Movies</button> */}
        </div>
        </React.Fragment> 
    )
}
