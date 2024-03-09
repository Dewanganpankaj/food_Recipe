import React, { useState } from 'react';
import logo from './img.png';
import Mealitem from './MailItem';
import './style.css';
const Navbar = () => {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState([]);

    const searchMeal = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setMeal(data.meals || []);
                setSearch("");
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchMeal();
        }
    };

    return (
        <>
            <div className="main" style={{ textAlign: 'center' }}>
                <div className="welcome">
                     <div className="heading" lang="it">
                        <h1 >WELCOME TO MY RECIPE CHANNEL</h1>
                        <h4>Delicious Food Recipes</h4>
                        <img src={logo} alt="food"  />
                    </div>

                    <div className="searchBox">
                        <input
                            className="search-Bar"
                            type="search"
                            placeholder='What do you want to make today'
                            aria-label="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="btn" onClick={searchMeal} style={{ margin: '2mm' }}>
                           submit
                        </button>
                    </div>

                    <div className="container">
                        {
                            Mymeal === null ? <p className="notSearch">Not found</p> :
                                Mymeal.map((res) => {
                                    return (
                                        // here through meal item we configure our all details in api 
                                        // like column name and how many rows are their 
                                        <Mealitem key={res.idMeal} data={res} />
                                    )
                                })
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;
