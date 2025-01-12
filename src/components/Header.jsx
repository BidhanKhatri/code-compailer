import React, { useContext, useState } from "react";
import { CodeComContext } from "../context/CodeComContext";
import { FaAdjust, FaCode, FaJsSquare, FaPlay, FaPython } from "react-icons/fa";

import { FaSquareFull } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

const Header = () => {
  const {
    language,
    setLanguage,
    handleRunCode,
    loading,
    theme,
    setTheme,
    handleStopCode,
  } = useContext(CodeComContext);
  return (
    <header className="bg-[#263238] px-4 py-3 mb-2 rounded-md flex justify-between items-center shadow-md  flex-wrap gap-2 lg:gap:0">
      {" "}
      <div className="flex items-center">
        <span className=" mr-2 font-semibold text-neutral-300  items-center hidden lg:flex">
          <FaCode size={20} />
        </span>{" "}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="py-0.5 lg:py-1 rounded-md px-0 lg:px-2 text-xs lg:text-medium"
        >
          <option value="javascript"> JavaScript </option>
          <option value="python"> Python </option>
        </select>
      </div>
      <div className="flex items-center">
        <span className=" mr-2 font-semibold text-neutral-300 hidden lg:flex">
          <IoMdColorPalette size={24} />
        </span>{" "}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="rounded-md py-0.5 lg:py-1 px-0 lg:px-2 text-xs lg:text-medium"
        >
          <option value="material"> Material </option>
          <option value="dracula"> Dracula </option>
        </select>
      </div>
      <div className="flex gap-2 lg:gap-4">
        <button
          onClick={handleRunCode}
          disabled={loading}
          className="text-white bg-green-500  px-2 lg:px-4 w-fit shadow-md hover:shadow-green-500/40  flex items-center gap-1 lg:gap-2 rounded-sm py-1 lg:w-20 justify-center transition-all duration-500 ease-in-out disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="border-t-2 animate-spin border-white h-4 w-4 rounded-full"></div>
          ) : (
            <>
              {" "}
              <FaPlay size={10} className="hidden lg:block" /> Run
            </>
          )}
        </button>
        <button
          onClick={handleStopCode}
          disabled={!loading}
          className="text-white bg-red-500 px-2  lg:px-4 shadow-md hover:shadow-red-500/40 flex items-center gap-1 lg:gap-2 rounded-sm py-1 lg:w-20 justify-center transition-all duration-500 ease-in-out disabled:opacity-80 disabled:cursor-not-allowed"
        >
          <FaSquareFull size={10} className="hidden lg:block" /> Stop
        </button>
      </div>
    </header>
  );
};

export default Header;
