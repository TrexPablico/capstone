import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle the submission of the comment
    console.log("Comment submitted:", comment);
    // Reset the comment field after submission
    setComment("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="commentForm">
        <Form.Label>Add a comment:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CommentForm;
