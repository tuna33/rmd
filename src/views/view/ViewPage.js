import React from 'react';
import { withRouter } from 'react-router-dom';

const ViewPage = (props) => {
  const deck = props.location.state.deck;
  const turn = props.location.state.turn;
  const typeBonus = props.location.state.typeBonus;
  const supertypeBonus = props.location.state.supertypeBonus;
  console.log(deck);
  console.log(turn);
  console.log(typeBonus);
  console.log(supertypeBonus);

  return (
    <>
      <h2>View Page</h2>
      <p>This is the view page</p>
    </>
  );
};

export default withRouter(ViewPage);
