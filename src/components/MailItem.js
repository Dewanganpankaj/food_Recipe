import React from 'react'
// nnot make an ffunction model 

const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
        <div className="card">
            <img src={getMeal.data.strMealThumb }alt = "meal"></img>
       
            <div className="info">
                <h2>{getMeal.data.strMeal}</h2>
                <h2>{getMeal.data.strTags}</h2>
                <p >{getMeal.data.strArea}food</p>
            </div>
            <div className="recipe">
                <h2>Recipe</h2>
                <p>{getMeal.data.strInstructions}</p>
                <img src={getMeal.data.strMealThumb}/>
                <a href={getMeal.data.strSource}>Watch youtube video</a>
            </div>
        </div>
        </>
    )
}
export default Mealitem;
