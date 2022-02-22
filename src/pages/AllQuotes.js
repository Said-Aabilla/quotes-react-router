import QuoteList from "../components/quotes/QuoteList";
import { useHttp } from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (loadedQuotes.lenght === 0 || !loadedQuotes)) {
    return <NoQuotesFound />;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
