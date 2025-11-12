import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleincrease = () => {
    setCount(count + 1);
  };

  const handledecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlereset = () => {
    setCount(0);
    alert("Reset All number 😢");
  };
  return (
    <div className=" min-h-screen  flex items-center justify-center bg-slate-500 ">
      <div className=" bg-white/90 rounded-md p-6 text-center shadow-lg">
        <h2 className="text-xl font-black mb-3">Counter App</h2>
        <p className=" text-lg font-semibold mb-6">{count}</p>
        <div className=" flex items-center justify-center gap-2">
          <button
            onClick={handleincrease}
            className="py-2 px-4 rounded-md font-semibold bg-green-500 text-white"
          >
            increase{" "}
          </button>
          <button
            onClick={handledecrease}
            className="py-2 px-4 rounded-md font-semibold bg-red-500 text-white"
          >
            decrease
          </button>
          <button
            onClick={handlereset}
            className="py-2 px-4 rounded-md font-semibold bg-gray-500 text-white"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
