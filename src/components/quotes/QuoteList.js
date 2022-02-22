import { Fragment } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

//helper function to sort quotes
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let location = useLocation();

  const isSortingAscending = searchParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const sortButtonHandler = () => {
    navigate(
      {
        pathname: location.pathname,
        search: `${"?sort=" + (isSortingAscending ? "desc" : "asc")}`,
      },
      {
        replace: true,
      }
    );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortButtonHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
