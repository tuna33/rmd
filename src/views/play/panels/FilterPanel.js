import React from 'react';
import styled from 'styled-components';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  ActionGroup,
  TooltipTop,
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
  :active {
    outline: 4px solid #f25c54;
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
        <TooltipTop width="500px" padding="5" style={{ marginRight: '3%' }}>
          ❔
          <span>
            This is the <b>Filter Panel</b>.
            <br /> <br />
            When you keep or discard a random card, the filters are used to
            generate the <i>next random card</i>. If your filters aren't
            successful, a default search will be done instead.
            <br /> <br />
            <b>Mana Filter</b>
            <br />
            Click on a specific mana circle to toggle it on/off. A mana circle
            is on if it has an orange highlight. All selected color(s) must be
            present in the result. Other color(s) may appear as long as the
            selected colors requirement is met.
            <br /> <br />
            <b>Bonus Filters</b>
            <br />
            After 5 random card turns, you will get bonus filter(s): Supertype,
            Type, or both. Choose values to be applied in the next search.
            Alternatively, use the default options to avoid using these filters.
            Bonus filters do not stack/carry over to future rounds, even if not
            used.
          </span>
        </TooltipTop>
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
