import React from 'react';

import { RectangularPanelHeader, RectangularPanelBody } from '@components';
import { PrimaryButton, SecondaryButton } from '../../components';
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
      <RectangularPanelBody color="#202020" width="100%" height="90%" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Card here */}
        <img src={dummyCard} style={{
          margin: '3% 13% 0% 13%',
          width: '64%',
          height: '78%',
        }}/>
        {/* Buttons here */}
        <div
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'space-around',
            margin: '8% 0%',
          }}
        >
          <button>DISCARD</button>
          <button>KEEP</button>
        </div>
      </RectangularPanelBody>
    </div>
  );
};

const Circle = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${props => props.size};
  height: auto;
  padding-top: ${props => props.size};
  background: white;
  outline: ${props => props.selected ? `4px solid orange` : ''};
`;

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
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '90%',
          margin: 'auto',
          padding: '7% 0% 0% 0%',
        }}>
          <Circle size='10%' selected/>
          <Circle size='10%' />
          <Circle size='10%' selected />
          <Circle size='10%' />
          <Circle size='10%' />
        </div>

        <div
          style={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-around',
            margin: 'auto',
            paddingTop: '10%',
            flexShrink: '0',
          }}
        >
          <select name="A">
            <option value="a">All supertypes</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
          </select>

          <select name="B">
            <option value="a">All types</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
          </select>
        </div>
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

  for (let i = 0; i < 12; ++i) deck.push(<DummyCard key={i} />);

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
