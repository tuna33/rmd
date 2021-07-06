import React from 'react';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  Card,
  ActionGroup,
  PrimaryButton,
} from '@components';

const DeckCard = (props) => {
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
      />
    </div>
  );
};

export const DeckPanel = (props) => {
  const title = props.title;
  const deck = props.deck;

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
      />,
    );
  }
  return (
    <div
      style={{
        width: '88%',
        margin: '2% auto',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
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
      <ActionGroup width="70%" margin="auto" padding="5% 0% 0% 0%">
        <PrimaryButton
          text="COPY URL"
          onClick={() => alert('functionality not yet implemented')}
        />
      </ActionGroup>
    </div>
  );
};
