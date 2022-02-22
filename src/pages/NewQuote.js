import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const navigate = useNavigate();
  let { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes"); // add this 2nd param { state } to navigate whilst keep state
      // replace the current location instead of push a new one onto the history stack
      //navigate('/quotes', { replace: true })
    }
  }, [status, navigate]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
