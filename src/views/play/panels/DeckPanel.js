import React from 'react';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  Card,
  ActionGroup,
  PrimaryButton,
  SecondaryButton,
  TooltipLeft,
} from '@components';

const DeckCard = (props) => {
  const outline = props.selected ? '2px solid #f7b267' : 'none';
  return (
    <div
      style={{
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
        outline={outline}
        hoverOutline="2px dashed #fff"
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
      text: 'Toggle preview',
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
        margin: '2% 6% 2% 6%',
        height: '60%',
      }}
    >
      <RectangularPanelHeader
        color="#f4845f"
        height="11%"
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
        <TooltipLeft width='500px' padding='5' style={{marginRight: '3%'}}>
          ❔
          <span>
            This is the <b>Deck Panel</b>.
            <br /> <br />
            Cards you add to your deck will be displayed here.
            <br /> <br />
            <b>Card Preview</b>
            <br />
            You can click any card to toggle its preview in the Card Panel, and it will be highlighted in orange. Clicking another card will set that one up for preview, with the previous card remaining unchanged in the deck.
            <br /> <br />
            <b>Deck Actions</b>
            <br />
            At any time, you can clear your deck of all cards. When you reach the maximum deck capacity, and you're happy with the result, you can finish your deck. 
            <br />
            <b>WARNING</b> Both of these actions are irreversible!
          </span>
        </TooltipLeft>
      </RectangularPanelHeader>
      <RectangularPanelBody
        color="#202020"
        width="100%"
        height="97.5%"
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
        {deck.length === maxSize && (
          <PrimaryButton
            text="FINISH DECK"
            onClick={() => handleDeckAction(true)}
            disabled={deck.length === maxSize}
          />
        )}
        <SecondaryButton
          text="CLEAR DECK"
          onClick={() => handleDeckAction(false)}
        />
      </ActionGroup>
    </div>
  );
};
