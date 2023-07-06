import React, { useEffect, useState } from "react";
import { Meal } from "../Menu";

type AreaProps = {
  clickId: (id: string) => void;
};

function AreaFood(props: AreaProps) {
  const [areas, setAreas] = useState<Meal[]>([]);
  const [meals, setMeals] = useState<Meal[] | null>([]);
  const [area, setArea] = useState("");

  const clickArea = (clickedArea: string) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${clickedArea}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.json())
      .then((data) => setAreas(data.meals))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center">Area</h3>

          {!meals && (
            <div className="row">
              {areas.map((area) => (
                <div
                  style={{ color: "grey" }}
                  className="d-flex justify-content-center"
                  onClick={() => clickArea(area.strArea)}
                >
                  <h5>{area.strArea}</h5>
                </div>
              ))}
            </div>
          )}

          {meals && (
            <div className="row">
              <div
                className="d-flex"
                onClick={() => setArea("")}
              >
                <button onClick={() => setMeals(null)}>Mostra aree</button>
              </div>

              {meals.map((meal) => (
                <a style={{ textDecoration: "none", color: "orange" }} href="#">
                  <div
                    className="d-flex"
                    onClick={() => props.clickId(meal.idMeal)}
                  >
                    <div className="pt-1 pb-1">
                      <h5 >{meal.strMeal}</h5>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AreaFood;
