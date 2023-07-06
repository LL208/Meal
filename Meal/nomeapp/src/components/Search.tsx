import React, { useEffect, useState } from 'react'
import { Meal } from './Menu';

type SearchProps = {
  clickId:(id: string) => void 
}

function Search(props: SearchProps) {
  const [meals, setMeals] = useState<Meal[] | null>([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => setMeals(data.meals))

  },[searchTerm])

  
  return (
    <>
      <h1>Search</h1>
      <input type="text" placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

      {meals && searchTerm && (
        meals.map((meal) => (
          <h5 onClick={() => props.clickId(meal.idMeal)}>{meal.strMeal}</h5>
        )

        ))}
    </>
  )
}

export default Search