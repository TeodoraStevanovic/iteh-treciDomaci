import React from 'react';

import {BiLike } from "react-icons/bi";

function NavBar() {
    return (
        <div className="navBar">
          <a className='navName'>IZLOŽBA AUTOMOBILA</a>
          <div className="liked-items">
            <BiLike />
            <p className="liked-num">0</p>
          </div>
        </div>
      );
    }
export default NavBar;
