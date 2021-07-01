import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const NavUnlisted = styled.div`
    padding: 0px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      margin: 0.5em 0em 0.5em 3em;
      color: white;
    }

    @media (min-width: 2560px) {
      a {
        margin: 1em 0em 1em 3em;
      }
    }

    .current {
      color: #f7b267;
    }
  `;

const NavBar = () => {
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

const LogoText = styled.label`
  margin: 0.5em 0em 0.5em 0em;
  
  @media (min-width: 2560px) {
    margin: 1em 0em 1em 0em;
  }

  color: white;
`;

const Logo = () => {
  return <LogoText>RandomMagicDeck</LogoText>;
};

const HeaderDiv = styled.div`
    ${props => props.baseStyle};
    display: flex;
    justify-content: space-between;
  `;

const Header = (props) => {
  const baseStyle = props.baseStyle;
  return (
    <HeaderDiv baseStyle={baseStyle}>
      <Logo />
      <div />
      <NavBar />
    </HeaderDiv>
  );
};

export default Header;
