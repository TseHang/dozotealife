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

/**
 * @param { string } i18n - string, function, object
 * @param { parameter } 參數，想放幾個放幾個
 */
export const showI18n = (i18n, ...para) => {
  if (_.isString(i18n)) return i18n;
  else if (_.isFunction(i18n)) return i18n(...para);

  throw new Error('i18n string format wrong!');
};

