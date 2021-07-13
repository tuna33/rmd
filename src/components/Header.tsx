import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Heading
} from '@chakra-ui/react';
import styled from 'styled-components';

import { Target } from '@types';

type HeaderComponent = React.FC<{columnWidths: string[], targets: Target[]}>;
export const Header: HeaderComponent = ({columnWidths, targets}) => {
  return (
    <Flex bg="#202020" justify="space-between">
      <Box w={columnWidths[0]} />
      <Flex w={columnWidths[1]} justify="space-between" align="center">
        <Heading as="h2" color="#fff">Random Magic Deck</Heading>
        <Navbar targets={targets} />
      </Flex>
      <Box w={columnWidths[2]} />
    </Flex>
  );
}

const Navbar : React.FC<{targets: Target[]}> = ({targets}) => {
  const targetLinks = targets.map((t) =>
    <NavLinkStyled to={t.to} activeClassName="current" exact key={t.to}>
      {t.name}
    </NavLinkStyled>  
  );
  return (
    <NavFlex justify="space-between">
      {targetLinks}
    </NavFlex>
  );
}

const NavLinkStyled = styled(NavLink)<{}>`
  text-decoration: none;
  color: #fff;
  margin-left: 3em;

  .current {
    color: #f7b267;
  }
`;

const NavFlex = styled(Flex)<{}>`
  .current {
    color: #f7b267;
  }
`;