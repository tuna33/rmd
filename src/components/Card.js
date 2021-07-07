import React from 'react';
import styled from 'styled-components';

import { HoverableImage } from '@components';

export const DummyCard = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  width: ${223 / 2.4}px;
  height: ${311 / 2.4}px;
  color: red;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const Card = (props) => {
  const margin = props.margin;
  const width = props.width;
  const height = props.height;
  const art = props.art;
  const description = props.description;
  const onClick = props.onClick;
  const outline = props.outline;
  const hoverOutline = props.hoverOutline;

  return (
    <div
      style={{
        margin: margin,
        width: width,
        height: height,
      }}
    >
      <HoverableImage
        description={description}
        src={art}
        onClick={onClick}
        outline={outline}
        hoverOutline={hoverOutline}
      />
    </div>
  );
};
