import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

import { Row as row } from '~/components/Grid/Grid';
import fullImg from '~/components/Block/FullImg';

import { media } from '~/style/helper';
import slideImg1 from '~/assets/img/slide-1.png';
import slideImg2 from '~/assets/img/slide-2.jpg';
import slideImg3 from '~/assets/img/slide-3.jpg';
import slideImg4 from '~/assets/img/slide-4.jpg';

import { i18nString } from '@/i18n';

import Description from './SliderDescription';

const slidesString = i18nString('slides');

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
  padding: 0 2%;
  ${media('pad')} {
    margin: 0;
    padding: 0;
  }
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 82vh;
  filter: ${props => (props.loading ? 'blur(5px)' : 'none')};
  /* filter: blur(5px); */
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
    if (props.active) return `${slideIn} .8s cubic-bezier(.92,.19,.75,.71)`;
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
  background-color: ${props => (props.active ? '#fff' : '#ffffff80')};
  &:hover {
    background-color: #fff;
  }
`;

const slides = [slideImg1, slideImg2, slideImg3, slideImg4].map((src, idx) => ({
  src,
  description: {
    title: slidesString(idx).title,
    text: slidesString(idx).text,
  },
}));

class Slider extends PureComponent {
  state = {
    lastSlideIdx: 0,
    activeSlideIdx: 0,
    description: slides[0].description,
    loading: true,
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    this.loading();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onLoadWithSlidesImage = () => {
    this.timer = setTimeout(this.slide, 5000);
    this.setState({ loading: false });
  }

  loading = () => {
    this.image.src = slides[0].src;
    if (this.image.complete) {
      this.onLoadWithSlidesImage();
    } else {
      // [Bug]: why 'loadend' event trigger not working?
      this.image.addEventListener('load', () => {
        setTimeout(this.onLoadWithSlidesImage, 500);
      });
    }
  }

  slide = () => {
    const max = slides.length - 1;
    const current = this.state.activeSlideIdx;
    let next = current + 1;
    if (next > max) next = 0;

    this.setState(
      { activeSlideIdx: next, lastSlideIdx: current, description: slides[next].description },
      () => { this.timer = setTimeout(this.slide, 5000); },
    );
  }

  selectSlide = activeIdx => () => {
    const current = this.state.activeSlideIdx;
    clearTimeout(this.timer);
    this.setState(
      { activeSlideIdx: activeIdx, lastSlideIdx: current, description: slides[activeIdx].description },
      // () => { this.timer = setTimeout(this.slide, 8000); }, // Cuz it's chosen by user, so the timer is longer
    );
  }

  timer = 0;
  image = new Image();

  renderSlideImg() {
    const { activeSlideIdx, lastSlideIdx } = this.state;
    return slides.map(({ src }, idx) => (
      <FullImg
        key={idx}
        src={src}
        height={'100%'}
        active={idx === activeSlideIdx}
        last={idx === lastSlideIdx}
      />
    ));
  }

  renderDots() {
    const { activeSlideIdx } = this.state;
    return slides.map((el, idx) => <Dot key={`dot-${idx}`} onClick={this.selectSlide(idx)} active={idx === activeSlideIdx} />);
  }

  render() {
    const { description, loading, activeSlideIdx } = this.state;
    return (
      <Row>
        <Figure loading={loading} >
          {this.renderSlideImg()}
          <DotRow>
            {this.renderDots()}
          </DotRow>
          <Description description={description} slideKey={activeSlideIdx} />
        </Figure>
      </Row>
    );
  }
}

export default Slider;
