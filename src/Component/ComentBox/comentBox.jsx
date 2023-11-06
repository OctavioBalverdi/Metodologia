import React, { useState } from 'react';
import './CommentBox.css';

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') {
      return;
    }
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="comment-box">
      <h2>Comentarios</h2>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            {comment}
          </li>
        ))}
      </ul>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Escribe un comentario"
        />
        <button type="submit" className="comment-button">
          Agregar comentario
        </button>
      </form>
    </div>
  );
};

export default CommentBox;