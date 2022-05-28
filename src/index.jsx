import React, { useState } from 'react';
import { render } from 'react-dom';

import './style.css';

const App = () => {
  const [btnLikes, setBtnLikes] = useState(0);
  const [btnDislikes, setBtnDislikes] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            onClick={() => setBtnLikes(btnLikes + 1)}
            className="btn-like btn-like--up"
          ></button>
          <span className="likes-count likes-count--up">{btnLikes}</span>
          <button
            onClick={() => setBtnDislikes(btnDislikes + 1)}
            className="btn-like btn-like--down"
          ></button>
          <span className="likes-count likes-count--down">{btnDislikes}</span>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
