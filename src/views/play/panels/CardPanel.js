import React from 'react';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  ActionGroup,
  Card,
  TooltipRight,
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
        text={{
          color: '#fff',
          size: '1em',
        }}
        style={{
          justifyContent: 'space-between',
        }}
      >
        <span />
        <p>{title}</p>
        <TooltipRight width='500px' padding='5' style={{marginRight: '3%'}}>
          ❔
          <span>
            This is the <b>Card Panel</b>.
            <br /> <br />
            The active card will be displayed here. Both deck previews and random cards will have keep and discard actions.
            <br /> <br />
            <b>Random Card</b>
            <br />
            Fetched from API according to filters set in the Filter Panel. A dummy card is temporarily displayed as the card loads.
            <br />
            Click ➕ to add this card to your deck, or 🗑️ to discard this card. You must select one of the above to move onto the next random card.
            <br /> <br />
            <b>Deck Preview</b>
            <br />
            A single card selected from the deck via the Deck Panel. See the Deck Panel for information on how to (de)select a card for preview.
            <br />
            Click ➕ to keep this card in your deck, or 🗑️ to discard this card from your deck.
            <br />
            <b>WARNING!</b> Discarding a card from your deck is irreversible!
          </span>
        </TooltipRight>
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
        <Card
          margin="3% 13% 0% 13%"
          width="64%"
          height="80%"
          art={card.art}
          description={description}
          outline={outline}
        />
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
