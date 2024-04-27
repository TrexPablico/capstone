import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useApi from "../utilities/http";

const CommentForm = () => {
  const api = useApi();
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post("/comments");
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
