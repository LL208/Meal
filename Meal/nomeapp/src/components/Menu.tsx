import React, { FC, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Categories from "./Categories/Categories";
import Search from "./Search";
import Details from "./Details/Details";
import AreaFood from "./AreaFood/AreaFood";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
  strArea: string;
};

function Menu() {
  const [meal, setMeal] = useState<Meal | null>(null);


  // const clickId=useCallback((id: string) => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setMeal(data.meals[0]))
  //     .catch((err) => console.error(err));
  // },[])

  const clickId =(id: string) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row" style={{ marginTop: 56 }}>
          <div className="col-1" >
           
            <AreaFood clickId={clickId}></AreaFood>
          </div>

          <div className="col-9">
            {meal && <Details meal={meal} />}
            <Categories clickId={clickId} />
          </div>

          <div className="col-2">
            <Search clickId={clickId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
