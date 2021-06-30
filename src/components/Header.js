import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const NavBar = () => {
  const NavUnlisted = styled.div`
    padding: 0px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      padding: 15px 22px 15px 22px;
      color: white;
    }

    .current {
      color: #f7b267;
    }
  `;

  return (
    <NavUnlisted>
      <NavLink to="/" activeClassName="current" exact>
        Home
      </NavLink>
      <NavLink to="/play" activeClassName="current" exact>
        Play
      </NavLink>
      <NavLink to="/view" activeClassName="current" exact>
        View
      </NavLink>
      <a href="https://github.com/backyardmonk/rmd">Contribute</a>
    </NavUnlisted>
  );
};

const Logo = () => {
  const LogoText = styled.label`
    padding: 15px 0px 15px 0px;
    color: white;
  `;

  return <LogoText>RandomMagicDeck</LogoText>;
};

const Header = (props) => {
  const baseStyle = props.baseStyle;
  const HeaderDiv = styled.div`
    ${baseStyle};
    display: flex;
    justify-content: space-between;
  `;

  return (
    <HeaderDiv>
      <Logo />
      <div />
      <NavBar />
    </HeaderDiv>
  );
};

export default Header;
