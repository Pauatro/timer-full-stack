import React from 'react';
import renderer from 'react-test-renderer';
import { Timer, TimerDisplay } from '../../components/Timer';

it('Timer renders correctly', () => {
  const tree = renderer
    .create(<Timer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('TimerDisplay renders correctly', () => {
  const tree = renderer
    .create(<TimerDisplay 
      time = {0}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});