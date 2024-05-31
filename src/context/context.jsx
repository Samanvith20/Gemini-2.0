import { createContext, useState } from "react";
import PropTypes from "prop-types";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const[recentPrompt,setRecentPrompt]=useState("")
  const [prevPrompt, setPrevPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [showResults, setShowResults] = useState(false);

  const onSend = async (input) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResults(true);
      setRecentPrompt(input)
      const response = await runChat(input);
      
      setResultData(response);
      setPrevPrompt(input);
      setInput("");
    } catch (error) {
      console.error("Error running chat:", error);
    } finally {
      setLoading(false);
    }
  };

  const contextValues = {
    input,
    setInput,
    prevPrompt,
    loading,
    resultData,
    onSend,
    showResults,
    recentPrompt
  };

  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  );
};

// Define prop types for ContextProvider
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
