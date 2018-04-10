import TabNav from './TabNav';
import AnimNav from './AnimNav';

/* [Notice]: 因為是 hashRouter, 所以取 hash 做比較，到時候要改。 */
// const isHome = window.location.hash === '#/';
const getNavComponent = () => {
  const isHome = /\B(#\/)\B/.test(window.location.hash);
  return isHome ? AnimNav : TabNav;
};

export default getNavComponent();
