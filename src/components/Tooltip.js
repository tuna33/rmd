import styled from 'styled-components';

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  height: min-content;
  width: min-content;

  span {
    visibility: hidden;
    width: ${props => props.size};
    background-color: #202020;
    border: 3px solid #b8b8b8;
    color: #fff;
    text-align: center;
    padding: ${props => props.padding}%;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
  }

  :hover span {
    visibility: visible;
  }
`;

export const TooltipLeft = styled(Tooltip)`
  span {
    width: ${props => props.width};
    top: -${props => props.padding};
    right: ${props => `${100+parseInt(props.padding)}%`};
  }
`;

export const TooltipRight = styled(Tooltip)`
  span {
    width: ${props => props.width};
    top: -${props => props.padding};
    left: ${props => `${100+parseInt(props.padding)}%`}; 
  }
`;

export const TooltipTop = styled(Tooltip)`
  span {
    width: ${props => props.width};
    bottom: 100%;
    left: 50%;
    margin-left: ${props => `${-props.width}px`};
  }
`;

export const TooltipBottom = styled(Tooltip)`
  span {
    width: ${props => props.width};
    top: 100%;
    left: 50%;
    margin-left: ${props => `${-props.width}px`};
  }
`;
