import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Meal } from "../Menu";
import { url } from "inspector";

type CategoriesProps = {
  clickId: (id: string) => void;
};
type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

function Categories(props: CategoriesProps) {
  const [meals, setMeals] = useState<Meal[] | null>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const clickCategory = (clickedCategory: string) => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickedCategory}`
    )
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row ps-3 pe-3">
          <h1 className="text-center">Categories</h1>
          {categories.map((category) => (
            <div
              className="col-3 mt-5 mb-5 d-flex justify-content-center align-items-center"
              onClick={() => clickCategory(category.strCategory)}
              style={{
                minHeight: 100,
                color: "green",
                backgroundImage: `url(${category.strCategoryThumb})`,
              }}
            >
              
              <h5
                className="w-75 text-center"
                style={{ backgroundColor: "whitesmoke", borderRadius: 50 }}
              >
                {category.strCategory}
              </h5>
            </div>
          ))}
        </div>

        <div className="row">
        {meals &&
            meals.map((meal) => (
              <div
                className="col-3 d-flex justify-content-center"
                onClick={() => props.clickId && props.clickId(meal.idMeal)}
              >
                <div className="">
                  <a style={{textDecoration:"none" , color:"orange"}} href="#">
                    <h4>{meal.strMeal}</h4>
                    <img className="w-100" src={meal.strMealThumb} alt="" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
