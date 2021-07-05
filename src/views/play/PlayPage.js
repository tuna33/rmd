import React from 'react';
import { withRouter } from 'react-router-dom';

import { CardPanel } from './panels/CardPanel';
import { FilterPanel } from './panels/FilterPanel';
import { DeckPanel } from './panels/DeckPanel';
import styled from 'styled-components';

const MAX_DECK_SIZE = 60;
const DUMMY_CARD_IDX = -1;
const RANDOM_CARD_IDX = -2;

const dummyCardArt = require('@assets/dummy-card.jpg');
const dummyCard = {
  turn: DUMMY_CARD_IDX,
  art: dummyCardArt,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: '. .';
`;

const defaultMana = {
  white: true,
  blue: true,
  black: true,
  red: true,
  green: true,
};

const manaCodes = {
  white: 'W',
  blue: 'U',
  black: 'B',
  red: 'R',
  green: 'G',
};

class PlayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardIdx: DUMMY_CARD_IDX,
      randomCard: dummyCard,
      selectedMana: defaultMana,
      supertype: null,
      type: null,
      turn: 1,
      deck: [], // Array of {turn: X, art: (image)}
    };
    this.controller = new AbortController();
    this.typeBonusUsed = 0;
    this.supertypeBonusUsed = 0;
  }

  getActiveCard() {
    const activeIdx = this.state.activeCardIdx;
    if (activeIdx === RANDOM_CARD_IDX) return this.state.randomCard;
    if (activeIdx === DUMMY_CARD_IDX) return dummyCard;
    else return this.state.deck[activeIdx];
  }

  getCardUrl(type, supertype) {
    const mana = this.state.selectedMana;

    let manaString = '';
    for (const [color, selected] of Object.entries(mana)) {
      if (selected) manaString += `${manaCodes[color]},`;
    }
    manaString = manaString.slice(0, manaString.length - 1);
    let url = `https://api.magicthegathering.io/v1/cards?random=true&pageSize=1&contains=imageUrl`;
    url += `&colorIdentity=${manaString}`;
    if (type) url += `&type=${type}`;
    if (supertype) url += `&supertype=${supertype}`;
    console.log(`Using Url: ${url}`);
    return url;
  }

  componentDidMount() {
    this.fetchCard(this.getCardUrl(this.state.type, this.state.supertype), 1);
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  // TODO: implement filters
  fetchCard(url, turn) {
    this.setActiveCard(DUMMY_CARD_IDX, dummyCard);
    fetch(url, { signal: this.controller.signal })
      .then((response) => response.json())
      .then((data) => {
        const art = data.cards[0].imageUrl;
        this.setActiveCard(RANDOM_CARD_IDX, { turn: turn, art: art });
      })
      .catch((error) => {
        if (error.name === 'AbortError')
          console.error(`Aborted: ${error.message}`);
        else if (!data || !data.cards[0]) {
          console.log(
            `Unlucky! Your filters for the last card yielded no results.`,
          );
          return this.fetchCard(this.getCardUrl(undefined, undefined), turn);
        }
      });
  }

  setActiveCard = (index, card) => {
    if (index === DUMMY_CARD_IDX) {
      this.setState({
        randomCard: dummyCard,
        activeCardIdx: DUMMY_CARD_IDX,
      });
    } else if (index === RANDOM_CARD_IDX) {
      this.setState({
        randomCard: card,
        activeCardIdx: RANDOM_CARD_IDX,
      });
    } else {
      // Also highlight card in deck (can be inferred from activeCardIdx on DeckPanel)
      this.setState({
        activeCardIdx: index,
      });
    }
  };

  handleBonusChange = (ev) => {
    const target = ev.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleManaChange = (ev) => {
    const target = ev.target;
    const id = target.id;
    const value = !this.state.selectedMana[id];
    this.setState({
      selectedMana: { ...this.state.selectedMana, [id]: value },
    });
  };

  setRandomBonus() {
    const random = Math.floor(Math.random() * 100);
    if (random <= 40) this.setState({ type: 'All Types', supertype: null });
    else if (random <= 70)
      this.setState({ type: null, supertype: 'All Supertypes' });
    else this.setState({ type: 'All Types', supertype: 'All Supertypes' });
  }

  handleCardAction = (isAdd) => {
    const deck = this.state.deck;
    const cardIdx = this.state.activeCardIdx;

    if (deck.length >= MAX_DECK_SIZE && isAdd && cardIdx === RANDOM_CARD_IDX) {
      alert(
        'Maximum size reached! Discard deck card(s) or clear it to add a new card.',
      );
      return;
    }

    const activeCard = this.getActiveCard();
    const turn = this.state.turn;

    if (isAdd) {
      if (cardIdx === RANDOM_CARD_IDX) {
        deck.push(activeCard);
        this.setState({
          deck: deck,
        });
      }
    } else {
      if (cardIdx !== RANDOM_CARD_IDX) {
        deck.splice(cardIdx, 1);
        this.setState({
          deck: deck,
        });
      }
    }

    if (cardIdx === RANDOM_CARD_IDX) {
      const newTurn = turn + 1;
      this.setState({
        turn: newTurn,
      });
      this.fetchCard(
        this.getCardUrl(this.state.type, this.state.supertype),
        newTurn,
      );
      if (newTurn !== 1 && newTurn % 5 === 1) this.setRandomBonus();
      else this.setState({ type: undefined, supertype: undefined });
    } else {
      // We've just handled a deck card, so go back to the latest random card
      this.setActiveCard(RANDOM_CARD_IDX, this.state.randomCard);
    }
  };

  handleDeckAction = (isFinish) => {
    if (isFinish) {
      this.props.history.push({
        pathname: '/view',
        state: {
          deck: this.state.deck,
          turn: this.state.turn - 1,
          typeBonus: this.typeBonusUsed,
          supertypeBonus: this.supertypeBonusUsed,
        },
      });
    }

    const activeIdx = this.state.activeCardIdx;
    if (activeIdx !== DUMMY_CARD_IDX && activeIdx !== RANDOM_CARD_IDX)
      this.setActiveCard(RANDOM_CARD_IDX, this.state.randomCard);
    this.setState({ deck: [] });
  };

  render() {
    const selectedMana = this.state.selectedMana;
    const type = this.state.type;
    const supertype = this.state.supertype;
    const turn = this.state.turn;
    const deck = this.state.deck;
    const activeIdx = this.state.activeCardIdx;

    const activeCard = this.getActiveCard();
    let cardPanelTitle = '';
    if (activeIdx === RANDOM_CARD_IDX) cardPanelTitle = 'RANDOM CARD';
    else if (activeIdx === DUMMY_CARD_IDX)
      cardPanelTitle = 'LOADING NEXT CARD..';
    else cardPanelTitle = 'CARD FROM DECK';

    return (
      <Grid>
        <div>
          <CardPanel
            title={cardPanelTitle}
            card={activeCard}
            isDummy={activeIdx === DUMMY_CARD_IDX}
            isFromDeck={
              activeIdx !== RANDOM_CARD_IDX && activeIdx !== DUMMY_CARD_IDX
            }
            handleCardAction={this.handleCardAction}
          />
          <FilterPanel
            title="CARD FILTERS"
            mana={selectedMana}
            supertype={supertype}
            type={type}
            handleBonusChange={this.handleBonusChange}
            handleManaChange={this.handleManaChange}
            turn={turn}
          />
        </div>
        <DeckPanel
          title={`MY DECK (${deck.length}/${MAX_DECK_SIZE})`}
          deck={deck}
          activeCardIdx={activeIdx}
          handleCardClick={this.setActiveCard}
          handleDeckAction={this.handleDeckAction}
          maxSize={MAX_DECK_SIZE}
        />
      </Grid>
    );
  }
}

export default withRouter(PlayPage);
