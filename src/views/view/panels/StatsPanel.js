import React from 'react';

import { RectangularPanelBody, RectangularPanelHeader } from '@components';

export const StatsPanel = (props) => {
  const title = props.title;

  return (
    <div
      style={{
        width: '50%',
        height: '87%',
      }}
    >
      <RectangularPanelHeader
        color="#f4845f"
        height="15%"
        title={{
          color: '#fff',
          size: '1em',
        }}
      >
        <p>{title}</p>
      </RectangularPanelHeader>
      <RectangularPanelBody
        color="#202020"
        width="100%"
        height="100%"
        style={{
          display: 'flex',
					flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {/* Statistics here */}
				Statistics here
      </RectangularPanelBody>
    </div>
  );
};