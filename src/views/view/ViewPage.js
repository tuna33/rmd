import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { DeckPanel } from './panels/DeckPanel';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 50% 50%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    '. . .'
    '. . .';
`;

const ViewPage = (props) => {
  const deck = props.location.state.deck;
  const turn = props.location.state.turn;
  const typeBonus = props.location.state.typeBonus;
  const supertypeBonus = props.location.state.supertypeBonus;
  console.log(deck);
  console.log(turn);
  console.log(typeBonus);
  console.log(supertypeBonus);

  return (
    <Grid>
      <div />
      <div style={{ backgroundColor: 'red' }}>Top content here</div>
      <div />
      <div />
      <DeckPanel title={`DECK CONTENTS`} deck={deck} />
      <div />
    </Grid>
  );
};

export default withRouter(ViewPage);
