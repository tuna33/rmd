import React from 'react';

import styled from 'styled-components';

const art = require('@assets/mtg-golen.jpg');

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 3% 97%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    '. .'
    'text art';
`;

const TextGrid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 17% 66% 17%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    '. .'
    'content .'
    '. .';
  font-size: 1.2em;
  @media (min-width: 2560px) {
    font-size: 1.8em;
  }
`;

const Title = styled.h1`
  margin-left: 15%;
`;

const Thing = (props) => {
  return (
    <div>
      <Title>
        Ready for the
        <br />
        &nbsp;&nbsp;challenge?
      </Title>
      <div style={{ marginTop: '10%' }}>
        <p>
          Each turn, you will be given a random card based on your filters. You
          can choose whether to add it to your deck, or to move on to the next
          one.
        </p>
        <p>
          Filtering by color is always available. Every 5 turns, you’ll get a
          bonus filter!
        </p>
        <p>
          After you’re done, you can share the deck you’ve created with others.
          Good luck!
        </p>
      </div>

      {/* TODO: make this button a rounded primary button component */}
      <button style={{ marginTop: '3%' }}>Play Now</button>
    </div>
  );
};

export const HomePage = (props) => {
  return (
    <MainGrid>
      <div />
      <div />
      <TextGrid>
        <div />
        <div />
        <Thing />
        <div />
        <div />
        <div />
      </TextGrid>
      <div
        style={{
          backgroundColor: 'red',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* TODO: make this image "hoverable" with artist credits */}
        <img src={art} style={{ height: '100%' }} />
      </div>
    </MainGrid>
  );
};
