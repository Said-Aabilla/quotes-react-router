import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
  const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is fun!" },
    { id: "q2", author: "Maximilian", text: "Learning React is great!" },
  ];

  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
