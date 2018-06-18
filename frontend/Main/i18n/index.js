import _ from 'lodash';
import getUserLanguage, { DEFAULT_LANG } from '~/share/getUserLanguage';

import tw from './tw';
import en from './en';

const TRANSLATIONS = {
  'zh-tw': tw,
  en,
};


function getString(key, defaultLang = DEFAULT_LANG) {
  let lang = getUserLanguage();
  if (!TRANSLATIONS[lang]) lang = defaultLang;

  const path = `${lang}.${key}`;
  const defaultValue = _.get(tw, key); // use tw for default
  return _.get(TRANSLATIONS, path, defaultValue);
}

export const i18nString = category =>
  path => getString(`${category}.${path}`, 'zh-tw');
