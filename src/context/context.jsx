import { createContext, useState } from "react";
import PropTypes from "prop-types";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const[recentPrompt,setRecentPrompt]=useState("")
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [showResults, setShowResults] = useState(false);

   const delaypara=(i,nextWord)=>{
             setTimeout(()=>{
                setResultData((prev)=>prev+nextWord)
             },20*i)
   }

  const onSend = async (input) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResults(true);
     
      setRecentPrompt(input)
      setPrevPrompt(prev=>[...prev, input]);
      const response = await runChat(input);
       let responseArray=response.split("**")
       let newResponse=""
       for ( let i=0;i<responseArray.length;i++){
        
        // used to check if the response is the first or last element in the array
        if (i==0 || i%2!==1) {
          newResponse+=responseArray[i]
            
        } else {
            newResponse+="<b>"+responseArray[i]+"</b>"
        }
       }
       let newResponse2=newResponse.split("*").join("<br/>")
       let newResponseArray=newResponse2.split("")
       for(let i=0;i<newResponseArray.length;i++){
           const nextWord=newResponseArray[i]
           delaypara(i,nextWord,+ " ")
       }

    //   setResultData(newResponse2);
      
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
    recentPrompt,
    setRecentPrompt
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
