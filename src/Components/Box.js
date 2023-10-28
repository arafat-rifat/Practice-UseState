import React, { useState } from "react";

const Box = () => {
  const message = [
    "Update Your Profile",
    "Update Your Photo",
    "Update Your Number",
    "Thank You, you are done!!",
  ];

  function handlePrivious() {
    if (step > 1) setStep(step - 1);
  }
  function next() {
    if (step < 6) setStep(step + 1);
  }

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  console.log("🚀 ~ file: Box.js:20 ~ Box ~ isOpen:", isOpen);

  return (
    <div>
      <button
        className=" text-black font-bold text-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        &#x2715;
      </button>
      {isOpen && (
        <div className="bg-gray-500 flex flex-col justify-between px-10 py-10 gap-10">
          <div className="flex justify-between items-center">
            <div
              className={`${
                step >= 1
                  ? "px-3 py-3 rounded-full text-white bg-black"
                  : "px-3 py-3 rounded-full text-white bg-blue-600"
              }`}
            >
              1
            </div>
            <div
              className={`${
                step >= 2
                  ? "px-3 py-3 rounded-full text-white bg-black"
                  : "px-3 py-3 rounded-full text-white bg-blue-600"
              }`}
            >
              2
            </div>
            <div
              className={`${
                step >= 3
                  ? "px-3 py-3 rounded-full text-white bg-black"
                  : "px-3 py-3 rounded-full text-white bg-blue-600"
              }`}
            >
              3
            </div>
            <div
              className={`${
                step >= 4
                  ? "px-3 py-3 rounded-full text-white bg-black"
                  : "px-3 py-3 rounded-full text-white bg-blue-600"
              }`}
            >
              4
            </div>
            <div
              className={`${
                step >= 5
                  ? "px-3 py-3 rounded-full text-white bg-black"
                  : "px-3 py-3 rounded-full text-white bg-blue-600"
              }`}
            >
              5
            </div>
            <div
              className={`${
                step >= 6
                  ? "px-3 py-3 rounded-full text-white bg-black"
                  : "px-3 py-3 rounded-full text-white bg-blue-600"
              }`}
            >
              6
            </div>
          </div>
          <h1 className="py-10 px-10 flex justify-center text-white text-4xl font-medium">
            step-{step} : {message[step - 1]}
          </h1>
          <div className="flex justify-between items-center px-10 py-5">
            <button
              className="px-6 py-5 bg-green-500 rounded-2xl"
              onClick={handlePrivious}
            >
              previous
            </button>
            <button
              className="px-6 py-5 bg-green-500 rounded-2xl"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Box;
