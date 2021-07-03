import React from 'react';

import { RectangularPanelHeader, RectangularPanelBody } from '@components';
import { PrimaryButton, SecondaryButton } from '../../components';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: '. .';
`;

const CardPanel = (props) => {
  const title = props.title;

  return (
    <div
      style={{
        width: '80%',
        margin: '3% 10% 0% 10%',
        height: '65%',
      }}
    >
      <RectangularPanelHeader
        color="#f4845f"
        height="10%"
        title={{
          color: '#fff',
          size: '1em',
        }}
      >
        <p>{title}</p>
      </RectangularPanelHeader>
      <RectangularPanelBody color="#202020" width="100%" height="90%">
        {/* Card here */}
      </RectangularPanelBody>
    </div>
  );
};

const FilterPanel = (props) => {
  const title = props.title;

  return (
    <div
      style={{
        width: '80%',
        margin: '3% 10% 0% 10%',
        height: '31%',
      }}
    >
      <RectangularPanelHeader
        color="#f4845f"
        height="18%"
        title={{
          color: '#fff',
          size: '1em',
        }}
      >
        <p>{title}</p>
      </RectangularPanelHeader>
      <RectangularPanelBody color="#202020" width="100%" height="80%">
        {/* Filters here */}
      </RectangularPanelBody>
    </div>
  );
};

const DummyCard = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  width: ${223 / 2.4}px;
  height: ${311 / 2.4}px;
  color: red;
  flex-shrink: 0;
  flex-grow: 0;
`;

const DeckPanel = (props) => {
  const title = props.title;
  const deck = [];

  for (let i = 0; i < 12; ++i) deck.push(<DummyCard />);

  return (
    <div
      style={{
        width: '88%',
        margin: '12% 6% 2% 6%',
        height: '60%',
      }}
    >
      <RectangularPanelHeader
        color="#f4845f"
        height="10%"
        title={{
          color: '#fff',
          size: '1em',
        }}
      >
        <p>{title}</p>
      </RectangularPanelHeader>
      <RectangularPanelBody
        color="#202020"
        width="100%"
        height="100%"
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          flexShrink: '0',
          flexGrow: '0',
          overflow: 'scroll',
        }}
      >
        {/* Image list here */}
        {deck}
      </RectangularPanelBody>
    </div>
  );
};

export const PlayPage = (props) => {
  return (
    <Grid>
      <div>
        <CardPanel title="CURRENT CARD" />
        <FilterPanel title="CARD FILTERS" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DeckPanel title="MY DECK (8/60)" />
        <div
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '12%',
            flexShrink: '0',
          }}
        >
          <PrimaryButton
            text="FINISH DECK"
            onClick={() => {
              alert('Finished deck');
            }}
          />
          <SecondaryButton
            text="CLEAR DECK"
            onClick={() => {
              alert('Cleared deck');
            }}
          />
        </div>
      </div>
    </Grid>
  );
};
