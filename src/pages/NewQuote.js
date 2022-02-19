import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";

const NewQuote = () => {
  const navigate = useNavigate();

  const addQuoteHandler = (quote) => {
    console.log(quote);

    navigate("/quotes"); // add this 2nd param { state } to navigate whilst keep state
    
    // replace the current location instead of push a new one onto the history stack
    //navigate('/quotes', { replace: true })
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
