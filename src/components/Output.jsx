import React, { useContext } from "react";
import { CodeComContext } from "../context/CodeComContext";

const Output = () => {
  const { output, setOutput, consoleColor, consoleTextColor } =
    useContext(CodeComContext);
  console.log(consoleColor);
  return (
    <section className="">
      <div
        className={`w-full mt-2 h-56 p-4  text-white shadow-md`}
        style={{ backgroundColor: consoleColor }}
      >
        <div className="flex items-center justify-between">
          <p
            className={`mb-2 font-semibold `}
            style={{ color: consoleTextColor }}
          >
            Console:{" "}
          </p>
          <button
            onClick={() => setOutput("")}
            className="mb-2   border border-neutral-300 px-4 py-0.5 hover:bg-neutral-600 rounded-sm transition-all duration-300 ease-in-out"
            style={{ color: consoleTextColor }}
          >
            Clear{" "}
          </button>
        </div>
        <p
          className="text-sm "
          style={{ color: consoleTextColor }}
        >
          {output}
        </p>
      </div>
    </section>
  );
};

export default Output;
