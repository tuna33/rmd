import React from 'react';
import styled from 'styled-components';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  ActionGroup,
} from '@components';

const manaArt = {
  white: require('@assets/mana-white.jpg'),
  blue: require('@assets/mana-blue.jpg'),
  black: require('@assets/mana-black.jpg'),
  red: require('@assets/mana-red.jpg'),
  green: require('@assets/mana-green.jpg'),
};

const Mana = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${(props) => props.size};
  height: auto;
  padding-top: ${(props) => props.size};
  background-image: url(${(props) => props.image});
  background-size: 100%;
  background-repeat: no-repeat;
  outline: ${(props) => (props.selected ? `4px solid #f7b267` : '')};
  :hover {
    outline: 4px solid #fff;
  }
`;

const superTypes = ['Basic', 'Legendary', 'Ongoing', 'Snow', 'World'];

const types = [
  'Artifact',
  'Conspiracy',
  'Creature',
  'Enchantment',
  'Instant',
  'Land',
  'Phenomenon',
  'Plane',
  'Planeswalker',
  'Scheme',
  'Sorcery',
  'Tribal',
  'Vanguard',
];

export const FilterPanel = (props) => {
  const title = props.title;
  const selectedMana = props.mana;
  const selectedType = props.type;
  const selectedSupertype = props.supertype;
  const handleBonusChange = props.handleBonusChange;
  const handleManaChange = props.handleManaChange;

  const manaList = Object.keys(selectedMana).map((c) => (
    <Mana
      size="10%"
      key={c}
      id={c}
      image={manaArt[c]}
      selected={selectedMana[c]}
      onClick={handleManaChange}
    />
  ));
  const superTypeOptions = ['All Supertypes'].concat(superTypes).map((st) => (
    <option value={st} key={st}>
      {st}
    </option>
  ));
  const typeOptions = ['All Types'].concat(types).map((t) => (
    <option value={t} key={t}>
      {t}
    </option>
  ));

  return (
    <div
      style={{
        width: '80%',
        margin: '3% 10% 0% 10%',
        height: '31%',
      }}
    >
      <RectangularPanelHeader
        color="#f4845f"
        height="18%"
        title={{
          color: '#fff',
          size: '1em',
        }}
      >
        <p>{title}</p>
      </RectangularPanelHeader>
      <RectangularPanelBody color="#202020" width="100%" height="80%">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            margin: 'auto',
            padding: '7% 0% 0% 0%',
          }}
        >
          {manaList}
        </div>

        <ActionGroup width="90%" margin="auto" padding="10% 0% 0% 0%">
          {selectedSupertype && (
            <select
              name="supertype"
              value={selectedSupertype}
              onChange={handleBonusChange}
            >
              {superTypeOptions}
            </select>
          )}
          {selectedType && (
            <select
              name="type"
              value={selectedType}
              onChange={handleBonusChange}
            >
              {typeOptions}
            </select>
          )}
        </ActionGroup>
      </RectangularPanelBody>
    </div>
  );
};
