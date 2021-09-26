import React from 'react';
import renderer from 'react-test-renderer';
import { 
    Icon,
    HeaderLogo,
    SunIcon,
    MoonIcon,
    PlayIcon,
    StopIcon
} from '../../components/Icons';
import { EThemes } from '../../modules/theme/theme.interfaces';

it('Icon renders correctly', () => {
  const tree = renderer
    .create(<Icon
        class = "icon"
        icon = "resources/logo-light.svg"
        alt = "icon"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('HeaderLogo renders correctly on LIGHT theme', () => {
    const tree = renderer
      .create(<HeaderLogo
          theme = {EThemes.LIGHT}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('HeaderLogo renders correctly on DARK theme', () => {
    const tree = renderer
      .create(<HeaderLogo
          theme = {EThemes.DARK}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('SunIcon renders correctly on LIGHT theme', () => {
    const tree = renderer
      .create(<SunIcon
          theme = {EThemes.LIGHT}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('SunIcon renders correctly on DARK theme', () => {
    const tree = renderer
      .create(<SunIcon
          theme = {EThemes.DARK}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('MoonIcon renders correctly on LIGHT theme', () => {
    const tree = renderer
      .create(<MoonIcon
          theme = {EThemes.LIGHT}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('MoonIcon renders correctly on DARK theme', () => {
    const tree = renderer
      .create(<MoonIcon
          theme = {EThemes.DARK}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('PlayIcon renders correctly on LIGHT theme', () => {
    const tree = renderer
      .create(<PlayIcon
          theme = {EThemes.LIGHT}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('PlayIcon renders correctly on DARK theme', () => {
    const tree = renderer
      .create(<PlayIcon
          theme = {EThemes.DARK}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('StopIcon renders correctly on LIGHT theme', () => {
    const tree = renderer
      .create(<StopIcon
          theme = {EThemes.LIGHT}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

it('StopIcon renders correctly on DARK theme', () => {
    const tree = renderer
      .create(<StopIcon
          theme = {EThemes.DARK}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});