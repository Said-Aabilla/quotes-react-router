import { useState, useEffect, useCallback } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { useHttp } from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();
  const quoteId = params.quoteId;

  const {
    sendRequest,
    status,
    data: loadedComments,
  } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let renderComments;
  console.log(loadedComments)
  if (status === "pending") {
    renderComments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (loadedComments || loadedComments.lenght > 0)) {
    renderComments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.lenght === 0)
  ) {
    renderComments = <p className="centered focused">No comments yet!</p>;
  }

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}

      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}

      {renderComments}
    </section>
  );
};

export default Comments;
