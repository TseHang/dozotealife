export const DEFAULT_LANG = 'zh-tw';

export const getUserLanguageHelper = () => {
  const [, qsLang] = location.search.match(/\blang=([^&]+)/) || [];
  if (qsLang) return qsLang;

  const {
    languages = [],
    language = '',
    userLanguage = '',
  } = navigator || {};

  const navigatorLang = languages[0] || language || userLanguage;
  if (navigatorLang) return navigatorLang;

  return DEFAULT_LANG;
};

export default () => {
  const lang = getUserLanguageHelper();
  return typeof lang === 'string' ? lang.toLowerCase() : DEFAULT_LANG;
};
