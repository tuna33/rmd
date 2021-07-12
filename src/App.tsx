import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, PlayPage, ViewPage } from '@views';
import { Header } from '@components';

import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 14% 72% 14%;
  grid-template-rows: 5% 95%;
  gap: 0px 0px;
  grid-template-areas:
    '. header .'
    '. content .';
`;

const baseHeaderStyles = css`
  background-color: #202020;
  background-color: 3px solid #a0a0a0;
  font-size: 1rem;
  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }
`;

const DummyHeaderDiv = styled.div`
  ${baseHeaderStyles};
`;

export const App = () => {
  return (
    <Router>
      <Grid>
        <DummyHeaderDiv />
        <Header baseStyle={baseHeaderStyles} />
        <DummyHeaderDiv />
        <div />
        <div>
          <Switch>
            <Route path="/play">
              <PlayPage />
            </Route>
            <Route path="/view">
              <ViewPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <div />
      </Grid>
    </Router>
  );
};
