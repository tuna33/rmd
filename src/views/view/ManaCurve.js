import React from 'react';
import { Bar } from 'react-chartjs-2';

const populateDataFromDeck = (deck) => {
  let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  deck.forEach((card) => {
    if (card.isLand) return;
    const cost = card.cost;
    const idx = cost >= 10 ? 11 : cost;
    data[idx]++;
  });
  return data;
};

export const ManaCurve = (props) => {
  const deck = props.deck;

  const values = populateDataFromDeck(deck);

  const data = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'],
    datasets: [
      {
        label: 'Number of cards with this mana cost',
        data: values,
        backgroundColor: '#f4845f',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div
      style={{
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};
