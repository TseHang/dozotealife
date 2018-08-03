import { arrayOf, oneOfType, number, string, object, func } from 'prop-types';

export const cssPropTypes = arrayOf(oneOfType([
  number,
  string,
  object,
  func,
]));
