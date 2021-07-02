import React from 'react';
import { useHistory } from 'react-router';

import styled from 'styled-components';
import { PrimaryButton, HoverableImage } from '@components';

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

const WelcomePanel = (props) => {
  const history = useHistory();

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

      <PrimaryButton text="PLAY NOW" onClick={() => history.push('/play')} />
    </div>
  );
};

const WelcomeDescription = {
  text: 'Art from https://www.artofmtg.com/art/golem-token-3/',
  color: '#fff',
  background: '#202020',
  fontSize: '0.8em',
};

const WelcomeBanner = () => {
  return <HoverableImage description={WelcomeDescription} src={art} />;
};

export const HomePage = (props) => {
  return (
    <MainGrid>
      <div />
      <div />
      <TextGrid>
        <div />
        <div />
        <WelcomePanel />
        <div />
        <div />
        <div />
      </TextGrid>
      <WelcomeBanner />
    </MainGrid>
  );
};
