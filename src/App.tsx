import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Grid,
  Box,
  Flex,
} from '@chakra-ui/react';

import { HomePage, PlayPage, ViewPage } from '@views';
import { Header } from '@components';

const columnWidths = ["14%", "72%", "14%"];

const targets = [
  { to: "/", name: "Home"},
  { to: "/play", name: "Play"},
  { to: "/view", name: "View"},
];

export const App = () => {
  return (
    <Router>
      <Grid templateColumns="100%" templateRows="8% 92%">
        <Header columnWidths={columnWidths} targets={targets} />
        <Flex>
          <Box w={columnWidths[0]} />
          <Box w={columnWidths[1]}>
            <Switch >
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
          </Box>
          <Box w={columnWidths[2]} />
        </Flex>
      </Grid>
    </Router>  
  );
}