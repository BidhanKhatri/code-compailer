import React, { useContext, useState } from "react";
import CodeEditor from "./CodeEditor";
import { CodeComContext } from "../context/CodeComContext";

const Compiler = () => {
  const { language, setLanguage } = useContext(CodeComContext);
  const [output, setOutput] = useState("");
  const { code, setCode } = useContext(CodeComContext);

  //function to run code
  const runCode = async () => {
    try {
    } catch (error) {}
  };
  return (
    <section>
      <div>
        <CodeEditor language={language} value={code} onChange={setCode} />
      </div>
    </section>
  );
};

export default Compiler;
