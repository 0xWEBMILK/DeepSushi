import FooterNav from "./FooterNav/FooterNav";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterNav />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
