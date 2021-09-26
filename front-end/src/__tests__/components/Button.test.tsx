import React from 'react';
import renderer from 'react-test-renderer';
import { Button, TimerButton } from '../../components/Button';
import { EThemes } from '../../modules/theme/theme.interfaces';

it('Button renders correctly', () => {
  const tree = renderer
    .create(<Button onClick  = {()=>{}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('TimerButton renders correctly in LIGHT theme', () => {
    const tree = renderer
      .create(<TimerButton 
        time  = {0}
        theme = {EThemes.LIGHT}
        onTimerClick = {()=>{}}
        timerIsActive = {true}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('TimerButton renders correctly in DARK theme', () => {
  const tree = renderer
    .create(<TimerButton 
      time  = {0}
      theme = {EThemes.DARK}
      onTimerClick = {()=>{}}
      timerIsActive = {true}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});