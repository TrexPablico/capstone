import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Comment Manager</h1>
      <CommentForm articleId={1} />
      <CommentList comments={comments} />
    </div>
  );
}
