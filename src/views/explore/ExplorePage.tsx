import React from "react";
import {
	Grid,
	Flex,
	Heading,
	Button,
	Box,
} from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';

const generateRandomManaValues = () => {
  let result = Array<Number>(11);
  let cards = 100;
  for(let i = 0; i < 11; i++) {
    const idx = Math.floor(Math.random() * 11);
    const random = Math.floor((Math.random() * cards));
    cards -= random;
    result[idx] = random;
  }
  return result;
}

const data = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"],
  datasets: [
    {
      label: "# of non-lands",
      data: generateRandomManaValues(),
      backgroundColor: [ "#c4c4c4"],
    }
  ]
};

const options = {
  indexAxis: "y",
  responsive: true,
  scales: {
    x: {
      min: 0,
      suggestedMax: 100,
      minStep: 1,
    }
  },
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    }
  },
};

const prevCard = () => {
  alert("Previous card");
}

const nextCard = () => {
  alert("Next card");
}

export const ExplorePage: React.FC<{owner: string, deckName: string, time: number}> = ({owner, deckName, time}) => {
  return (
    <Grid templateRows="repeat(3, 100vh)">
      <Flex bgColor="#fff" flexDir="column" align="center">
        <Heading 
          size="2xl"
          fontWeight="normal"
          textAlign="center"
          marginTop="6rem"
        >
          {owner.toLocaleUpperCase()}'s
        </Heading>
        <Heading 
          size="2xl"
          textAlign="center"
          marginTop="4rem"
          letterSpacing="wide"
        >
          {deckName}
        </Heading>
        <Heading 
          size="2xl"
          fontWeight="normal"
          textAlign="center"
          marginTop="7rem"
        >
          Assembled in
        </Heading>
        <Heading 
          size="2xl"
          textAlign="center"
          marginTop="4rem"
          letterSpacing="wide"
        >
          {time} minutes
        </Heading>
        <Button
          borderRadius={32}
          marginTop="8rem"
          colorScheme="gray"
          size="lg"
        >
          <Heading size="lg" textAlign="center">Share</Heading>
        </Button>
      </Flex>
      <Flex 
        bg="linear-gradient(180deg, #000000 0%, rgba(3, 3, 3, 0.977429) 21.53%, rgba(128, 128, 128, 0) 99.99%, #000000 100%, rgba(128, 128, 128, 0) 100%);"
        flexDir="column"
        align="center"
      >
        <Heading
          size="2xl"
          textAlign="center"
          marginTop="8rem"
          color="#fff"
        >
          Browse Contents
        </Heading>
        <Flex
          bgColor="#202020"
          w="278px"
          h="387px"
          marginTop="14rem"
          justify="space-between"
          align="center"
        >
          <Button 
            bgColor="#ababab"
            w="64px" h="64px"
            opacity="15%"
            borderRadius={32} 
            onClick={() => prevCard()} />
          <Button 
            bgColor="#ababab"
            w="64px" h="64px"
            opacity="15%"
            borderRadius={32} 
            onClick={() => nextCard()} />  
        </Flex>
      </Flex>
      <Flex bgColor="#fff" align="center">
        <Bar type="line" data={data} options={options} height={384} />
      </Flex>
    </Grid>
  );
}