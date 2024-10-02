import React from "react";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllFoodList } from "../features/foodSlice";
import { useState } from "react";
export const Breakfast = () => {
debugger
    // const location = useLocation();
    const foodList =useSelector(getAllFoodList);
    const [filterdItem,setFilteredItem]=useState([foodList])
    const filteredMealType=(mealType)=>{
        debugger
        const filteredMealList=foodList.filter((item)=>item.mealType.includes(mealType));
        setFilteredItem(filteredMealList);
    }
     filteredMealType("Breakfast");

      return (
          <React.Fragment>
          <div className="row">
            {filterdItem?.map((recipie) =>         
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