import React from 'react';

import Title from '@/components/PageTop/Title';
import { i18nString } from '@/i18n';

const i18n = i18nString('know-how');

const KnowHow = () => (
  <React.Fragment>
    <Title title={i18n('title')} />
    <h1>know-how</h1>
  </React.Fragment>
);

export default KnowHow;
