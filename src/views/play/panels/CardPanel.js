import React from 'react';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  ActionGroup,
  Card,
} from '@components';

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
          height="78%"
          art={card}
          description={description}
        />
        {/* Buttons here */}
        <ActionGroup width="50%" margin="8% 0%">
          <button>DISCARD</button>
          <button>KEEP</button>
        </ActionGroup>
      </RectangularPanelBody>
    </div>
  );
};
