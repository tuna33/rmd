import React from 'react';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  DummyCard,
  ActionGroup,
  PrimaryButton,
  SecondaryButton,
} from '@components';

export const DeckPanel = (props) => {
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
      <ActionGroup width="70%" margin="auto" padding="10% 0% 0% 0%">
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
      </ActionGroup>
    </div>
  );
};
