import React from 'react';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  Card,
  ActionGroup,
  PrimaryButton,
  SecondaryButton,
} from '@components';

const DeckCard = (props) => {
  const outline = props.selected ? '2px solid #f7b267' : 'none';
  return (
    <div
      style={{
        outline: outline,
        margin: '1% 1%',
      }}
    >
      <Card
        description={props.description}
        art={props.art}
        width={props.width}
        height={props.height}
        onClick={props.onClick}
        selected={props.selected}
      />
    </div>
  );
};

export const DeckPanel = (props) => {
  const title = props.title;
  const deck = props.deck;
  const handleDeckAction = props.handleDeckAction;
  const handleCardClick = props.handleCardClick;
  const maxSize = props.maxSize;
  const activeCardIdx = props.activeCardIdx;

  const deckList = [];

  for (let i = 0; i < deck.length; ++i) {
    const description = {
      text: `Added on turn #${deck[i].turn}`,
      color: '#fff',
      background: '#202020',
      fontSize: '0.8',
    };
    deckList.push(
      <DeckCard
        key={i}
        description={description}
        art={deck[i].art}
        width={223 / 1.8}
        px
        height={311 / 1.8}
        px
        onClick={() => handleCardClick(i, deck[i])}
        selected={activeCardIdx === i}
      />,
    );
  }
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
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {/* Image list here */}
        {deckList}
      </RectangularPanelBody>
      <ActionGroup width="70%" margin="auto" padding="10% 0% 0% 0%">
        {deck.length === maxSize &&
          <PrimaryButton
            text="FINISH DECK"
            onClick={() => handleDeckAction(true)}
            disabled={deck.length === maxSize}
          />
        }
        <SecondaryButton
          text="CLEAR DECK"
          onClick={() => handleDeckAction(false)}
        />
      </ActionGroup>
    </div>
  );
};
