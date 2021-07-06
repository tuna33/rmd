import React from 'react';
import styled from 'styled-components';
import { RectangularPanelBody, RectangularPanelHeader } from '@components';

const StatsEntryText = styled.p`
  color: #fff;
  font-size: 0.8em;
`;

const StatsEntry = (props) => {
  const field = props.field;
  const value = props.value;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0% 5%',
      }}
    >
      <StatsEntryText>{field}</StatsEntryText>
      <StatsEntryText>{value}</StatsEntryText>
    </div>
  );
};

export const StatsPanel = (props) => {
  const title = props.title;
  const turns = props.turns;
  const typeBonus = props.typeBonus;
  const supertypeBonus = props.supertypeBonus;
  const lands = props.lands;
  const name = props.name;

  return (
    <div
      style={{
        width: '50%',
        height: '87%',
      }}
    >
      <RectangularPanelHeader
        color="#f4845f"
        height="15%"
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
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <StatsEntry field="Deck Name" value={name} />
        <StatsEntry field="Turns Used" value={turns} />
        <StatsEntry field="Type Bonus Used" value={typeBonus} />
        <StatsEntry field="Supertype Bonus Used" value={supertypeBonus} />
        <StatsEntry field="Lands" value={lands} />
      </RectangularPanelBody>
    </div>
  );
};
