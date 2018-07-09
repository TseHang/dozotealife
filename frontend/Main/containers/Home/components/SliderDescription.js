import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { number, shape, string, func, oneOfType } from 'prop-types';

import { media, fromProps } from '~/style/helper';
import { showI18n } from '@/i18n';

const Container = styled.figcaption`
  position: absolute;
  left: ${fromProps('left')};
  top: ${fromProps('top')};

  color: ${fromProps('color')};
  z-index: 1;

  ${media('pad')} {
    position: static;
    height: 30px;
    width: 100%;
    text-align: center;

    > h2 {
      display: none;
    }
  }
`;

const Title = styled.h2``;

const Text = styled.p`
  margin-top: 5px;
  padding-left: 5px;
`;

const transformPosition = (key, isPad) => {
  switch (key) {
    case 0: return { left: '55%', top: '85%', color: isPad ? 'gray' : 'white' };
    case 1: return { left: '5%', top: '27%', color: isPad ? 'gray' : 'white' };
    case 2: return { left: '65%', top: '23%', color: isPad ? 'gray' : 'black' };
    case 3: return { left: '5%', top: '20%', color: isPad ? 'gray' : 'black' };
    default:
      return { left: '5%', top: '20%', color: 'white' };
  }
};

class SliderDescription extends PureComponent {
  static propTypes = {
    slideKey: number,
    description: shape({
      title: string,
      text: oneOfType([string, func]),
    }),
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.slideKey !== state.slideKey) {
      return nextProps;
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.state = {
      slideKey: props.slideKey,
      description: {
        title: props.description.title,
        text: props.description.text,
      },
      isPad: window.innerWidth <= 700,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({
      isPad: window.innerWidth <= 700,
    });
  }

  render() {
    const { slideKey, description, isPad } = this.state;
    return (
      <Container {...transformPosition(slideKey, isPad)}>
        <Title>{description.title}</Title>
        <Text>{showI18n(description.text)}</Text>
      </Container>
    );
  }
}


export default SliderDescription;
