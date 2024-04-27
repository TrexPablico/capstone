import React from "react";
import { ListGroup } from "react-bootstrap";

const CommentList = ({ comments }) => {
  // Add a check to ensure comments is defined before mapping
  if (!comments) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  return (
    <div>
      <h2>Comments</h2>
      <ListGroup>
        {comments.map((comment) => (
          <ListGroup.Item key={comment.id}>
            <p>{comment.content}</p>
            <small>Posted by User ID: {comment.user_id}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentList;
