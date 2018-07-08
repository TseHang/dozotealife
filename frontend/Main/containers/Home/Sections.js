import React from 'react';
import styled from 'styled-components';

import { i18nString } from '@/i18n';
import section1Img from '~/assets/img/section-1.jpg';
import section2Img from '~/assets/img/section-2.jpg';
import section3Img from '~/assets/img/section-3.jpg';
import section4Img from '~/assets/img/section-4.jpg';

import Section from './components/Section';

const i18n = i18nString('sections');

const sectionTo = ['/story', '/promise', '/product', '/know-how'];
const sectionPosition = ['center 28%', '', 'center 15%', 'center 0'];
const sectionsSrc = [section1Img, section2Img, section3Img, section4Img];
const sections = i18n('sections').map((section, i) => ({
  ...section,
  src: sectionsSrc[i],
  position: sectionPosition[i],
  to: sectionTo[i],
}));

const Wrapper = styled.div`
  margin: 5% 10%;
`;

const Sections = () => (
  <Wrapper>
    {sections.map(
      section => <Section {...section} key={section.title} />
    )}
  </Wrapper>
);

export default Sections;

