import React from 'react';
import Logo from './logo';

const Header = props => {
  return (
    <div className="header">
      <Logo />
      <h1 className="header__slogan">Have a Swell Day!</h1>
    </div>
  );
};

export default Header;
