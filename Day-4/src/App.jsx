import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, SetError] = useState(null);
  const [visible, setVisible] = useState(8)

  const loadMoro = () =>{
    setVisible((prv)=> prv + 8)
  }

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoding(false);
      })
      .catch((err) => {
        console.log(err);
        SetError(err.Message);
        setLoding(false);
      });
  }, []);

  console.log(meals);

  return (
    <div className="p-6 bg-white">
      <h1 className=" text-center text-2xl font-bold py-2.5 bg-black text-white rounded-md mb-8">
        Food Item
      </h1>
      {loding && <p className=" text-center text-pink-500">Loding...</p>}
      {error && <p className=" text-center text-red-500">Error</p>}
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
        {meals.slice(0,visible).map((item) => (
          <div key={item.id} className=" bg-gray-200 rounded-lg p-3  ">
            <img
              className="w-full h-48 md:h-56 object-cover rounded-md hover:scale-105 hover:transition-all duration-300"
              src={item.strMealThumb}
            />
            <h2 className=" text-xl font-semibold text-black/80 pt-2">
              {item.strMeal}
            </h2>
            <p className=" pt-1 pb-3 text-sm text-stone-400">
              {item.strInstructions.slice(0, 100)}...
            </p>
            <a
              href="#"
              className=" text-blue-500 hover:underline font-semibold"
            >
              Learn Moro
            </a>
          </div>
        ))}
      </div>
        {/* View More Button */}
        {visible < meals.length &&(
          <div className=" mt-4 text-center">
            <button onClick={loadMoro} className=" px-4 py-2 rounded-md bg-amber-500 text-white">View Moro</button>
          </div>
        )}
    </div>
  );
};

export default App;
