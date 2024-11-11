import presentRoll from "../../../Images/presentRoll.png";

import "./Present.css"

const Present = () => {
  return (
    <section className="present">
      <div className="present__content">
        <div className="present__text">
          <h3 className="present__titel">
            ПОЛУЧИТЕ
            <br /> КАЛИФОРНИЮ
            <br /> В ПОДАРОК!
          </h3>
          <p className="present__description">Просто оставьте свой email</p>
        </div>
        <div className="present__image">
          <img src={presentRoll} alt="Roll in present" />
        </div>

        <form className="present__form" action="" method="post">
          <div className="inputs">
            <input
              className="present__form__input"
              type="text"
              name=""
              id=""
              placeholder="введите email"
              required
            />
            <button className="present__form__btn">ПОДПИСАТЬСЯ</button>
          </div>

          <div className="present__form__text">
            <p className="present__form__description">
              Нажимая кнопку «Подписаться», вы подтверждаете свое согласие<br /> на
              получение рекламной e-mail рассылки, ознакомились и<br /> соглашаетесь с
              условиями &nbsp;
              <a className="present__form__link" href="#">
                политики конфиденциальности
              </a>
            </p>
            <a className="present__form__link" href="#">
              Условия акции
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Present;
