import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

import { Row as row } from '~/components/Grid/Grid';
import fullImg from '~/components/Block/FullImg';

import { media } from '~/style/helper';
import bg from '~/assets/img/bg.jpg';
import bg2 from '~/assets/img/bg2.jpg';
import bg3 from '~/assets/img/bg3.jpg';

import Description from './SliderDescription';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.98);
  };
  to {
    opacity: 1;
    transform: scale(1);
  };
`;

const Row = styled(row)`
  ${media('pad')} {
    margin: 0;
  }
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 85vh;
  ${media('pad')} {
    height: 30vh;
  }
`;

const FullImg = styled(fullImg)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => {
    if (props.active) return '1';
    else if (props.last) return '0';
    return '-1';
  }};
  animation: ${(props) => {
    if (props.active) return `${slideIn} .8s ease-out`;
    return 'none';
  }};
`;

const DotRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 1rem;
  right: 5%;
  width: 7%;
  z-index: 1;
`;

const Dot = styled.div`
  cursor: pointer;
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background-color: #ffffff80;
  &:hover {
    background-color: #fff;
  }
`;

const slides = [
  {
    key: '對飲喝茶',
    src: bg,
    description: {
      title: 'title',
    },
  },
  {
    key: '對飲喝',
    src: bg2,
    description: {
      title: 'title',
    },
  },
  {
    key: '對飲',
    src: bg3,
    description: {
      title: 'title',
    },
  },
];


class Slider extends PureComponent {
  state = {
    lastSlideIdx: 0,
    activeSlideIdx: 0,
    description: 1,
  }

  componentDidMount() {
    this.timer = setTimeout(this.slide, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  slide = () => {
    const max = slides.length - 1;
    const current = this.state.activeSlideIdx;
    let next = current + 1;
    if (next > max) next = 0;

    this.setState(
      { activeSlideIdx: next, lastSlideIdx: current },
      () => { this.timer = setTimeout(this.slide, 5000); },
    );
  }

  selectSlide = activeIdx => () => {
    const current = this.state.activeSlideIdx;
    clearTimeout(this.timer);
    this.setState(
      { activeSlideIdx: activeIdx, lastSlideIdx: current },
      () => { this.timer = setTimeout(this.slide, 8000); }, // 因為是自己選看的，所以讓使用者看比較久
    );
  }

  timer = 0;

  renderSlideImg() {
    const { activeSlideIdx, lastSlideIdx } = this.state;
    return slides.map(({ key, src }, idx) => (
      <FullImg
        key={key}
        src={src}
        height={'100%'}
        active={idx === activeSlideIdx}
        last={idx === lastSlideIdx}
      />
    ));
  }

  render() {
    const { description } = this.state;
    return (
      <Row>
        <Figure>
          {this.renderSlideImg()}
          <DotRow>
            <Dot onClick={this.selectSlide(0)} />
            <Dot onClick={this.selectSlide(1)} />
            <Dot onClick={this.selectSlide(2)} />
          </DotRow>
        </Figure>
        <Description description={description} />
      </Row>
    );
  }
}

export default Slider;
