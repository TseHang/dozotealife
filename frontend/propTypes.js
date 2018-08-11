import * as PropTypes from 'prop-types';

export const cssPropTypes = PropTypes.arrayOf(PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.object,
  PropTypes.func,
]));

export const propTypesOfMatch = {
  isExact: PropTypes.bool,
  params: PropTypes.any,
  path: PropTypes.string,
  url: PropTypes.string,
};

export const propTypesOfLocation = {
  hash: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
  state: PropTypes.any,
};
