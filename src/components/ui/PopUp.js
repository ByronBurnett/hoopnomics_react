import React from "react";

const PopUp = (props) => {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen shadow-lg flex justify-center items-center">
      <div className="relative p-8 w-full max-w-4xl h-96 bg-white">
        <button
          className="absolute top-4 right-4"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
