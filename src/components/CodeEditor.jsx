import React, { useRef, useContext } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import { CodeComContext } from "../context/CodeComContext";
const CodeEditor = ({ language, value, onChange }) => {
  const codeMirrorRef = useRef(null);
  const { theme } = useContext(CodeComContext);

  return (
    <div>
      <CodeMirror
        ref={codeMirrorRef}
        value={value}
        options={{
          mode:
            language === "java" || language === "csrc"
              ? `text/x-${language}`
              : language,
          theme: theme,
          lineNumbers: true,
          lineWrapping: true,
          auto_close_brackets: true,
          auto_close_tags: true,
          match_brackets: true,
          match_tags: true,
        }}
        onBeforeChange={(editor, data, value) => onChange(value)}
      />
    </div>
  );
};

export default CodeEditor;
