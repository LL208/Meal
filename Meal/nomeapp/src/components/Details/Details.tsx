import React, { useEffect, useState } from 'react'
import { Meal } from '../Menu'

type DetailsProps={
    meal:Meal
}

function Details({meal}: DetailsProps) {

    return (
        <>
            {meal && (
                <div className='row mb-5 ps-3 pe-3'>
                    <div className='col-6'>
                        <h5>{meal.strCategory}</h5>
                        <h1>{meal.strMeal}</h1>
                        <div >
                        <img className='w-100' src={meal.strMealThumb} alt="" />

                        </div>
                    </div>
                    <div className='col-6 d-flex align-items-center'>
                        
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            )}

        </>
    )
}

export default Details