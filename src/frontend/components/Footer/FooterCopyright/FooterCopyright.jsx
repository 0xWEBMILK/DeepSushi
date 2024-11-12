import "./FooterCopyright.css";

import vk from "../../../Images/vk.svg";
import tg from "../../../Images/tg.svg";

const FooterCopyright = () => {
  return (
    <>
      <div className="footer__copyright">
        <p className="footer__copyright__text">
          © 2024 «Якитория». Все права принадлежат ИП Никогосяну Ованесу
          Армановичу, ОГРНИП 324774600024389, 125047, Москва, ул. 2-я Брестская,
          д. 30, 2-й эт.
        </p>

        <div className="footer__copyright__messenger">
          <div className="footer__copyright__messenger__vk ">
            <a href="#">
              <img
                className="footer__copyright__messenger__vk__img "
                src={vk}
                alt="vk"
              />
            </a>
          </div>
          <div className="footer__copyright__messenger__tg ">
            <a href="#">
              <img
                className="footer__copyright__messenger__tg"
                src={tg}
                alt="telegram"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCopyright;
