import React, { useState, useEffect } from "react";
import useApi from "../utilities/http";

const CommentList = () => {
  const api = useApi();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await api.get("/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      // Handle error
    }
  };

  const handleAddComment = async () => {
    try {
      await api.post("/comments", {
        content: newComment,
      });
      setNewComment("");
      fetchComments();
      alert("Comment added successfully.");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error adding comment. Please try again.");
    }
  };

  const handleEditComment = async (id, updatedContent) => {
    try {
      await api.put(`/comments/${id}`, {
        content: updatedContent,
      });
      setEditingCommentId(null);
      fetchComments();
      alert("Comment updated successfully.");
    } catch (error) {
      console.error("Error updating comment:", error);
      alert("Error updating comment. Please try again.");
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await api.delete(`/comments/${id}`);
      fetchComments();
      alert("Comment deleted successfully.");
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Error deleting comment. Please try again.");
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments ? (
          comments.map((comment) => (
            <li key={comment.id}>
              {editingCommentId === comment.id ? (
                <>
                  <input
                    type="text"
                    value={comment.content}
                    onChange={(e) =>
                      handleEditComment(comment.id, e.target.value)
                    }
                  />
                  <button onClick={() => setEditingCommentId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>{comment.content}</p>
                  <button onClick={() => setEditingCommentId(comment.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteComment(comment.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))
        ) : (
          <li>No comments available</li>
        )}
      </ul>
    </div>
  );
};

export default CommentList;
