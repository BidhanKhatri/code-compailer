import { createContext, useState } from "react";

export const CodeComContext = createContext();

const CodeComProvide = ({ children }) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("material");
  const [stop, setStop] = useState("");

  //function to handle run code

  const handleRunCode = async () => {
    try {
      let ws = new WebSocket("wss://compiler.skillshikshya.com/ws/compiler/");

      setLoading(true);
      ws.onopen = () => {
        setOutput("");
        ws.send(
          JSON.stringify({
            command: "run",
            code: code,
            language: language,
            input: "",
          })
        );
        setLoading(false);
      };
      ws.onmessage = (e) => {
        const res = JSON.parse(e.data);
        console.log(res);
        if (res.type === "stdout" || res.type === "stderr") {
          setOutput((prev) => prev + res.data);
        }
        if (res.type === "stop") {
          setStop("Excecution stopped");
          setLoading(false);
          ws.close();
        }
      };

      ws.onerror = (error) => {
        console.log(error);
        setLoading(false);
      };

      ws.onclose = () => {
        console.log("Web socket connection closed");
        setLoading(false);
      };
    } catch (error) {
      console.log(error);
    }
  };

  //function to handle stop code

  const handleStopCode = async () => {
    try {
      let ws = new WebSocket("wss://compiler.skillshikshya.com/ws/compiler/");

      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            command: "stop",
          })
        );
      };

      ws.onmessage = (e) => {
        const res = JSON.parse(e.data);

        if (res.type === "stop") {
          setOutput("");
          console.log("stop btn click garda aako res", res);
          setStop("Exicution stopped");
          setLoading(false);
        }
      };
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    //variables
    language,
    code,
    output,
    loading,
    theme,

    //functions
    setLanguage,
    handleRunCode,
    setCode,
    setLoading,
    setOutput,
    setTheme,
    handleStopCode,
  };

  return (
    <CodeComContext.Provider value={value}>{children}</CodeComContext.Provider>
  );
};

export default CodeComProvide;
