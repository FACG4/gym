import React from 'react';
import './style.css';
const Header = (props) => {
  return (
    <header className="header">
    <div className="menu-toggle"><img  className="menu-toggle-img" src='http://www.gsg.ru/imgs/burger-menu-icon.svg' alt='menu icon'></img></div>
      <h1 className="title">{props.title}</h1>
{props.subtitle && <h2 className="title2">{props.subtitle}</h2>}
    </header>
  );
};

export default Header;
