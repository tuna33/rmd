import styled from 'styled-components';

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  height: min-content;
  width: min-content;

  span {
    visibility: hidden;
    width: 200px;
    background-color: #202020;
    border: 3px solid black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    position: absolute;
    left: 50%;
    margin-left: 15px;
    z-index: 1;
  }

  :hover span {
    visibility: visible;
  }
`;

// have different tooltip variants here, according to top/right/bottom/left
