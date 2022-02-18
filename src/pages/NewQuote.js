import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quote) => {
    console.log(quote);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
