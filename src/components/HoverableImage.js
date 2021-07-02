import React from 'react';

import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: 100%;

  :hover {
    p {
      visibility: visible;
    }
  }
`;

const DescriptionText = styled.p`
  font-size: ${(props) => `${props.fontSize}em` || '1em'};
  color: ${(props) => props.color || '#fff'};
  visibility: hidden;
  background: ${(props) => props.background || 'none'};
  padding: ${(props) => props.padding || '1% 1%'};
  @media (min-width: 2560px) {
    /* Code below is ugly, but it can stay for the moment */
    font-size: ${(props) =>
      props.fontSize ? parseFloat(props.fontSize) * 2 : 1.5}em;
  }
`;

export const HoverableImage = (props) => {
  const text = props.description.text;
  const src = props.src;
  const color = props.description.color;
  const background = props.description.background;
  const fontSize = props.description.fontSize;

  return (
    <ImageWrapper src={src}>
      <DescriptionText
        color={color}
        background={background}
        fontSize={fontSize}
      >
        {text}
      </DescriptionText>
    </ImageWrapper>
  );
};
