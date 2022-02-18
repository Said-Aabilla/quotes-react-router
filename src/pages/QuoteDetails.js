import { useParams, Outlet } from "react-router-dom";

const QuoteDetails = () => {
  let params = useParams();
  return (
    <>
      <h2>Quote id: {params.quoteId}</h2>
      <Outlet/>
    </>
  );
};

export default QuoteDetails;
