import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import useApi from "../utilities/http";
// import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

import { toast } from "react-toastify";

import Modal from "react-bootstrap/Modal";

const CommentForm = () => {
  const token = localStorage.getItem("token"); // Move token declaration here
  const api = useApi(token);
  const user = JSON.parse(localStorage.getItem("user")); // Use localStorage.getItem to retrieve user
  const [comment, setComment] = useState("");
  const [putComment, setPutComment] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const body = {
        content: comment,
      };

      const { data } = await api.post("/comments", body);
      toast.success(data.message);
      setComment("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchComments() {
    const { data } = await api.get("/comments");
    setPutComment(data);
  }

  const handleEditComment = async (index) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to edit this comment?"
      );
      if (confirmed) {
        const commentToUpdate = putComment[index];

        const newComment = prompt("Enter the new comment:");
        if (!newComment) {
          return;
        }

        if (newComment.trim() === "") {
          alert("Comment cannot be empty. Please provide a valid comment.");
          return;
        }
        const updatedData = {
          id: commentToUpdate.id,
          content: newComment,
        };

        await api.put(`/comments/${commentToUpdate.id}`, updatedData);
        const updatedComments = [...putComment];
        updatedComments[index] = { ...commentToUpdate, ...updatedData };
        setPutComment(updatedComments);

        alert("Comment updated successfully!");
      }
    } catch (error) {
      console.error("Error editing comment:", error);
    }
  };

  const handleDeleteComment = async (index) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (confirmed) {
        const commentToDelete = putComment[index];
        await api.delete(`/comments/${commentToDelete.id}`);

        const updatedComments = putComment.filter(
          (comment) => comment.id !== commentToDelete.id
        );
        setPutComment(updatedComments);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <>
      <Container className="my-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="commentForm">
            <Form.Label>
              <h2>Add a comment:</h2>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            className="mt-3"
            variant="primary"
            type="submit"
            style={{ transition: "0.3s ease-in-out" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f3e3e3";
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#1F244D";
              e.target.style.color = "#fff";
            }}
          >
            Submit
          </Button>
        </Form>
        <h2 className="mt-3">Comments</h2>
        <Container>
          <Row>
            {putComment.map((addComment, index) => (
              <Col key={index}>
                <Card
                  className="mt-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 10px darkblue",
                  }}
                >
                  <Card.Body>
                    <Card.Text key={index}>{addComment.content}</Card.Text>
                    <div className="d-flex justify-content-end">
                      <Button
                        className="mx-2"
                        onClick={() => handleEditComment(index)}
                      >
                        Edit
                      </Button>
                      <Button onClick={() => handleDeleteComment(index)}>
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default CommentForm;
