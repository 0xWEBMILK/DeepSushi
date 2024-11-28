import FooterNavigation from "../FooterNavigation/FooterNavigation";
import FooterNavigationYakitoria from "../FooterNavigation/FooterNavigationYakitoria/FooterNavigationYakitoria";
import FooterNavigationDelivery from "../FooterNavigation/FooterNavigationDelivery/FooterNavigationDelivery";
import FooterNavigationLegal from "../FooterNavigation/FooterNavigationLegal/FooterNavigationLegal";

import "./FooterNav.css";

const FooterNav = () => {
  return (
    <ul className="footer__list">
      <li className="footer__item">
        <FooterNavigation />
      </li>
      <li className="footer__item">
        <FooterNavigationYakitoria />
      </li>
      <li className="footer__item">
        <FooterNavigationDelivery />
      </li>
      <li className="footer__item">
        <FooterNavigationLegal />
      </li>
    </ul>
  );
};

export default FooterNav;
