import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import { useHttp } from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  let location = useLocation();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && !loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  const showCommentsLink = location.pathname === `/quotes/${quoteId}/comments`;

  const linkContent = (
    <div className="centered">
      <Link className="btn--flat" to={`${location.pathname}comments`}>
        Load comments
      </Link>
    </div>
  );

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {!showCommentsLink && linkContent}
      <Outlet />
    </>
  );
};

export default QuoteDetail;

// if you want to hide a component

// import { withRouter } from 'react-router-dom';
// const ComponentToHide = (props) => {
//   const { location } = props;
//   if (location.pathname.match(/routeOnWhichToHideIt/)){
//     return null;
//   }

//   return (
//     <ComponentToHideContent/>
//   )
// }

// const ComponentThatHides = withRouter(ComponentToHide);
