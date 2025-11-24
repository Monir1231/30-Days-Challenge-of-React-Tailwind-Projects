import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";


const App = () => {
  const [meals, setMeals] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [visible,setVisible] = useState(4)
  

  // filter blogs search
  const MealsFilter = meals.filter((meal) =>
    meal.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // input  suggestion show

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const matches = meals.filter((meal) =>
      meal.strCategory.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestion(value ? matches : []);
  };

  // search button
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
    setSuggestion([]);
    setSearchTerm("");
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then(
      (res) =>
        res.json().then((data) => {
          setMeals(data.meals);
        })
      
    );
  }, []);

  console.log(meals);

  const lodeMore = () =>{
    setVisible((prv)=> prv + 4)
  }

  
  return (
    <div className="  w-full p-8  text-white">
      <div className="bg-blue-500 rounded-md shadow-lg py-4">
        <h2 className=" text-3xl text-center font-bold ">Search App </h2>

        <form onSubmit={handleSearch}>
          <div className=" relative  text-center my-5 flex flex-row items-center justify-center gap-4">
            <input
              autoComplete="off"
              value={searchTerm}
              onChange={handleInputChange}
              type="text"
              name="text"
              id="text"
              placeholder="Enter your input"
              className="  py-2 px-8 border border-gray-100 focus:outline-none rounded-md"
            />
            <button
              type="submit"
              className=" px-4 py-2 rounded-lg bg-gray-800 text-white hover: cursor-pointer"
            >
              Submit
            </button>
          </div>

          {/* Suggestions dropdown */}

          {suggestion.length > 0 && (
            <ul className=" absolute top-36 left-0   right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-w-sm mx-auto">
              {suggestion.map((item) => (
                <li
                  key={item.idMeal}
                  onClick={() => {
                    setSearchTerm(item.strCategory);
                    setSuggestion([]);
                  }}
                  className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
                >
                  {item.strCategory}
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

     
      
      {/* {loding && <p className=" text-center text-pink-500">Loding...</p>} */}
      {/* Blogs Result */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        {MealsFilter.length > 0 ? (
          MealsFilter.slice(0,visible).map((item) => (
            <div key={item.idMeal} className=" bg-gray-50 p-2 rounded-md hover:-translate-y-3 duration-200">
              <img className="w-full rounded-lg object-cover" src={item.strMealThumb} />
              <h3 className="text-2xl text-gray-800 font-bold pt-3 pb-2">
                {item.strMeal}
              </h3>
              <p className=" text-gray-500 text-base  ">{item.strCategory}</p>
           <Link to={`/meals/${item.idMeal}`} className=" text-blue-500 font-semibold text-lg pt-4">View details <span className=" text-lg">→</span></Link>
              
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-3.5">No blogs found!</p>
        )}
      </div>

      {visible < meals.length &&(
        <div className=" text-center mt-8">
        <button onClick={lodeMore} className=" py-2 px-4 rounded-md bg-gray-800 font-semibold">No Moro Data</button>
        </div>
      )}
    </div>
  );
};

export default App;
