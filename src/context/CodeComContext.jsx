import { createContext, useEffect, useState } from "react";

export const CodeComContext = createContext();

const CodeComProvide = ({ children }) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("material");
  const [stop, setStop] = useState("");
  const [consoleColor, setConsoleColor] = useState("#263238");
  const [consoleTextColor, setConsoleTextColor] = useState("black");

  const [nWs, setNws] = useState(null);

  //function to handle run code

  const handleRunCode = async () => {
    try {
      let ws = new WebSocket("wss://compiler.skillshikshya.com/ws/compiler/");
      setNws(ws);

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
        if (
          res.type === "stdout" ||
          res.type === "stderr" ||
          res.type === "error"
        ) {
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
      if (!nWs) {
        console.log("No active webstock to stop");
      }

      nWs.send(
        JSON.stringify({
          command: "stop",
        })
      );

      nWs.onmessage = (e) => {
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

  useEffect(() => {
    if (theme === "dracula") {
      setConsoleColor("white");
      setConsoleTextColor("#263238");
    } else {
      setConsoleColor("#263238");
      setConsoleTextColor("white");
    }
  }, [theme]);

  const value = {
    //variables
    language,
    code,
    output,
    loading,
    theme,
    consoleColor,
    consoleTextColor,

    //functions
    setLanguage,
    handleRunCode,
    setCode,
    setLoading,
    setOutput,
    setTheme,
    handleStopCode,
    setConsoleColor,
    setConsoleTextColor,
  };

  return (
    <CodeComContext.Provider value={value}>{children}</CodeComContext.Provider>
  );
};

export default CodeComProvide;
