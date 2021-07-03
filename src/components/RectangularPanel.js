import styled from 'styled-components';

export const RectangularPanelHeader = styled.div`
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${(props) => props.title.color};
    font-size: ${(props) => props.title.size};
  }
`;

export const RectangularPanelBody = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
