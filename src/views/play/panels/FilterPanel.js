import React from 'react';
import styled from 'styled-components';

import {
  RectangularPanelBody,
  RectangularPanelHeader,
  ActionGroup,
} from '@components';

const Circle = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${(props) => props.size};
  height: auto;
  padding-top: ${(props) => props.size};
  background: white;
  outline: ${(props) => (props.selected ? `4px solid orange` : '')};
`;

export const FilterPanel = (props) => {
  const title = props.title;

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
        {/* Filters here */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            margin: 'auto',
            padding: '7% 0% 0% 0%',
          }}
        >
          <Circle size="10%" selected />
          <Circle size="10%" />
          <Circle size="10%" selected />
          <Circle size="10%" />
          <Circle size="10%" />
        </div>

        <ActionGroup width="90%" margin="auto" padding="10% 0% 0% 0%">
          <select name="A">
            <option value="a">All supertypes</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
          </select>

          <select name="B">
            <option value="a">All types</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
            <option value="a">A</option>
          </select>
        </ActionGroup>
      </RectangularPanelBody>
    </div>
  );
};
