import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Grid,
  Box,
  ChakraProvider,
} from '@chakra-ui/react';

import { ExplorePage, HomePage, PlayPage, ViewPage } from '@views';
import { Header } from '@components';

const columnWidths = ["14%", "72%", "14%"];

const targets = [
  { to: "/", name: "Home"},
  { to: "/play", name: "Play"},
  { to: "/view", name: "View"},
];

export const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Grid templateRows="80px min-content">
          <Box bg="#585858" />
          <ExplorePage owner="SomeCoolUser" deckName="Awesome Deck Name" time={10} />
        </Grid>
      </Router>
    </ChakraProvider>
  );
}