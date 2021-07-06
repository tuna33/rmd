import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { DeckPanel } from './panels/DeckPanel';
import { StatsPanel } from './panels/StatsPanel';
import { ManaCurve } from './ManaCurve';

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
  const state = props.location.state;

  useEffect(() => {
    if (state === undefined) {
      // Players tried to access directly without coming from a game, so redirect to home
      props.history.replace({
        pathname: '/',
        state: {},
      });
    }
  }, []);

  if (state) {
    const deck = state.deck;
    const turn = state.turn;
    const typeBonus = state.typeBonus;
    const supertypeBonus = state.supertypeBonus;
    const lands = deck.filter((c) => c.isLand).length;
    const name = 'RandomDeckName';

    return (
      <Grid>
        <div />
        <div style={{ marginTop: '2%', display: 'flex' }}>
          <StatsPanel
            title="STATISTICS"
            turns={turn}
            typeBonus={typeBonus}
            supertypeBonus={supertypeBonus}
            lands={lands}
            name={name}
          />
          <ManaCurve deck={deck} />
        </div>
        <div />
        <div />
        <DeckPanel title="DECK CONTENTS" deck={deck} />
        <div />
      </Grid>
    );
  } else {
    return <></>;
  }
};

export default withRouter(ViewPage);
