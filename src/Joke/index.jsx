import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [btnLikes, setBtnLikes] = useState(likes);
  const [btnDislikes, setBtnDislikes] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>

      <div className="joke__likes">
        <button
          id="btn-up"
          onClick={() => setBtnLikes(btnLikes + 1)}
          className="btn-like btn-like--up"
        ></button>
        <span className="likes-count likes-count--up">{btnLikes}</span>

        <button
          id="btn-down"
          onClick={() => setBtnDislikes(btnDislikes + 1)}
          className="btn-like btn-like--down"
        ></button>
        <span className="likes-count likes-count--down">{btnDislikes}</span>
      </div>
    </div>
  );
};

export default Joke;
