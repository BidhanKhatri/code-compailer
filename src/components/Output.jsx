import React, { useContext } from "react";
import { CodeComContext } from "../context/CodeComContext";

const Output = () => {
  const { output, setOutput } = useContext(CodeComContext);
  return (
    <section className="">
      <div className="w-full mt-2 h-56 p-4  text-white bg-[#263238] shadow-md">
        <div className="flex items-center justify-between">
          <p className="mb-2 font-semibold text-neutral-200">Console: </p>
          <button
            onClick={() => setOutput("")}
            className="mb-2  text-neutral-200 border border-neutral-300 px-4 py-0.5 hover:bg-neutral-600 rounded-sm transition-all duration-300 ease-in-out"
          >
            Clear{" "}
          </button>
        </div>
        <p className="text-sm text-neutral-300">{output}</p>
      </div>
    </section>
  );
};

export default Output;
