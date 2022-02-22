import { Link } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to={`/new-quote`}>Add quote!</Link>
    </div>
  );
};

export default NoQuotesFound;
