import React from 'react';

import { CardPanel } from './panels/CardPanel';
import { FilterPanel } from './panels/FilterPanel';
import { DeckPanel } from './panels/DeckPanel';
import styled from 'styled-components';

const dummyCard = require('@assets/dummy-card.jpg');

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: '. .';
`;

export const PlayPage = (props) => {
  const activeCard = dummyCard;

  return (
    <Grid>
      <div>
        <CardPanel title="CURRENT CARD" card={activeCard} />
        <FilterPanel title="CARD FILTERS" />
      </div>
      <DeckPanel title="MY DECK (8/60)" />
    </Grid>
  );
};
