import styled from 'styled-components';

export const ActionGroup = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'space-around'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
