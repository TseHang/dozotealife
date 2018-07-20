import React from 'react';
import styled from 'styled-components';

import SlideImg from '@/components/PageTop/SlideImg';
import Title from '@/components/PageTop/Title';
import LeftLineContent from '~/components/Paragraph/LineLeftContent';
import { ContentTitle } from '~/components/Paragraph/Paragraph';
import Motto from '~/components/Paragraph/Motto';

import { media } from '~/style/helper';

import { i18nString, showI18n } from '@/i18n';

import section1 from '~/assets/img/section-1.jpg';

import Spirits from './Spirits';

const storyString = i18nString('story');

const ContentWrapper = styled.div`
  margin: 15% auto 10%;
  width: 50%;

  ${media('pad')} {
    width: 80%;
  }
`;

const ParagraphTitle = styled(ContentTitle)`
  transform: translate(-20px, -100%);
`;

const Story = () => (
  <React.Fragment>
    <SlideImg src={section1} text={storyString('slideTitle')} backgroundPosition="center 30%" />
    <Title title={storyString('title')} />
    <Spirits content={storyString('spirits')} />
    <Motto>{storyString('motto')}</Motto>
    <ContentWrapper>
      <ParagraphTitle>起源</ParagraphTitle>
      <LeftLineContent>
        {showI18n(storyString('content'))}
      </LeftLineContent>
    </ContentWrapper>
  </React.Fragment>
);

export default Story;
