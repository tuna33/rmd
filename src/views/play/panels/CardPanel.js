import React from 'react';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  ActionGroup,
  Card,
} from '@components';

import styled from 'styled-components';

const ActionButton = styled.button`
  padding: 10px;
`;

const discardCard = (fromDeck) => {
  alert(`You've discarded a ${fromDeck ? 'deck' : 'random'} card`);
};

const addCard = (fromDeck) => {
  alert(`You've ${fromDeck ? 'kept' : 'added'} a card`);
};

export const CardPanel = (props) => {
  const title = props.title;
  const card = props.card;
  const description = {
    text: 'Saved on turn #5',
    color: '#fff',
    background: '#202020',
    fontSize: '0.8em',
  };

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
      <RectangularPanelBody
        color="#202020"
        width="100%"
        height="90%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Card here */}
        <Card
          margin="3% 13% 0% 13%"
          width="64%"
          height="80%"
          art={card}
          description={description}
        />
        {/* Buttons here */}
        <ActionGroup width="50%" margin="3% 0%">
          <ActionButton onClick={() => discardCard(true)}>🗑️</ActionButton>
          <ActionButton onClick={() => addCard(true)}>➕</ActionButton>
        </ActionGroup>
      </RectangularPanelBody>
    </div>
  );
};
