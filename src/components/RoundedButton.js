import React from 'react';

import styled from 'styled-components';

const defaultStyle = {
	radius: '1em',
	fontSize: '1em',
	fontColor: '#000000',
	borderColor: '#000000',
	borderSize: '0.4em',
	baseBGColor: '#ffffff',
	hoverBGColor: '#ffffff',
	clickBGColor: '#ffffff',
	padding: '1em',
};

const Button = styled.div`
	background-color: ${props => (props.baseBGColor || defaultStyle.baseBGColor)};
	color: ${props => (props.fontColor || defaultStyle.fontColor)};
	border: ${props => (props.border)};
	border-radius: ${props => (props.raidus || defaultStyle.radius)};
	text-align: center;
	padding: ${props => (props.padding || defaultStyle.padding)};
	font-size: ${props => (props.fontSize || defaultStyle.fontSize)};
	max-width: max-content;
	:hover {
		background-color: ${props => (props.hoverBGColor || defaultStyle.hoverBGColor)};
		cursor: pointer;
	}
	:active {
		background-color: ${props => (props.clickBGColor || defaultStyle.clickBGColor)};
	}
`;

export const RoundedButton = (props) => {
	const text = props.text;
	const radius = props.radius;
	const fontSize = props.fontSize;
	const fontColor = props.fontColor;
	const borderColor = props.borderColor;
	const borderSize = props.borderSize;
	const padding = props.padding;
	const [baseBGColor, hoverBGColor, clickBGColor] = props.bgColors;
	const onClick = props.onClick;

	const border = `${borderSize} solid ${borderColor}`;
	return (
		<Button 
			onClick={onClick}
			radius={radius}
			baseBGColor={baseBGColor}
			hoverBGColor={hoverBGColor}
			clickBGColor={clickBGColor}
			fontColor={fontColor}
			padding={padding}
			fontSize={fontSize}
			border={border}
		>
			{text}
		</Button>
	);
}

export const PrimaryButton = (props) => {
	const text = props.text;
	const onClick = props.onClick;

	return (
		<Button
			onClick={onClick}
			radius='3em'
			baseBGColor='#f25c54'
			hoverBGColor='#f14b43'
			clickBGColor='#e02021'
			fontColor='#ffffff'
			padding='0.5em 2.5em 0.5em 2.5em'
			fontSize='0.8em'
			border='3px solid #f25c54'
		>
			{text}
		</Button>
	)
}

export const SecondaryButton = (props) => {
	const text = props.text;
	const onClick = props.onClick;

	return (
		<Button
			onClick={onClick}
			radius='3em'
			baseBGColor='#ffffff'
			hoverBGColor='#eeeeee'
			clickBGColor='#cccccc'
			fontColor='#000000'
			padding='0.5em 2.5em 0.5em 2.5em'
			fontSize='0.8em'
			border='3px solid #f25c54'
		>
			{text}
		</Button>
	)
}