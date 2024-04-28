import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import useApi from "../utilities/http";
// import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";

const CommentForm = () => {
  const token = localStorage.getItem("token"); // Move token declaration here
  const api = useApi(token);
  const user = JSON.parse(localStorage.getItem("user")); // Use localStorage.getItem to retrieve user
  const [comment, setComment] = useState("");
  const [putComment, setPutComment] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentComment, setCurrentComment] = useState();

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
        user_id: user.id,
      };

      const { data } = await api.post("/comments", body);
      toast.success(data.message);
      setComment("");
    } catch (error) {
      console.log(error);
    }
    fetchComments();
  }
  async function fetchComments() {
    const { data } = await api.get("/comments");
    setPutComment(data);
  }

  const handleEditComment = async (index) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to edit this term?"
      );
      if (confirmed) {
        const commentToUpdate = terms[index];

        const newComment = prompt("Enter the new title for the term:");
        if (!newComment) {
          return;
        }

        if (newComment.trim() === "") {
          alert("Title cannot be empty. Please provide a valid title.");
          return;
        }
        const updatedData = {
          id: commentToUpdate.id,
          content: newComment,
        };

        await api.put(`/comments/${commentToUpdate.id}`, updatedData);
        const updatedComment = await api.get("/comments");
        setTerms(updatedComment);
      }
    } catch (error) {
      //  console.error("Error editing term:", error);
    }
    setOpenModal(true);
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
                      <Button>Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <div
          open={openModal}
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </Container>
    </>
  );
};

export default CommentForm;
