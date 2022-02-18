import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} exact />
        <Route path="/quotes/:quoteId" element={<QuoteDetails />}>
          <Route path="/quotes/:quoteId/comments" element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
