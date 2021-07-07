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

export const CardPanel = (props) => {
  const title = props.title;
  const card = props.card;
  const handleCardAction = props.handleCardAction;
  const isDummy = props.isDummy;
  const isFromDeck = props.isFromDeck;
  const outline = isFromDeck ? '2px solid #f7b267' : 'none';

  let text = undefined,
    background = 'none';
  if (isFromDeck) {
    text = `Added on turn #${card.turn}`;
    background = '#202020';
  }

  const description = {
    text: text,
    color: '#fff',
    background: background,
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
          art={card.art}
          description={description}
          outline={outline}
        />
        {/* Buttons here */}
        {!isDummy && (
          <ActionGroup width="50%" margin="3% 0%">
            <ActionButton onClick={() => handleCardAction(false)}>
              🗑️
            </ActionButton>
            <ActionButton onClick={() => handleCardAction(true)}>
              ➕
            </ActionButton>
          </ActionGroup>
        )}
      </RectangularPanelBody>
    </div>
  );
};
