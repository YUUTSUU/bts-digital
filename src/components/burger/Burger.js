import Logo from "./logo.svg"
import "./Burger.scss"

const Burger = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="burger__checked" />
      <label htmlFor="burger__checked" className="navigation__button">
        <span className="navigation__icon"></span>
        <span className="navigation__icon"></span>
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__container">
        <div className="navigation__brand">
          <a href="/#">
            <img src={Logo} alt="logo" className="navigation__logo" />
          </a>
        </div>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/#" className="navigation__link">Продукты</a>
          </li>
          <li className="navigation__item">
            <a href="/#" className="navigation__link">Партнерам</a>
          </li>
          <li className="navigation__item">
            <a href="/#" className="navigation__link">О нас</a>
          </li>
          <li className="navigation__item">
            <a href="/#" className="navigation__link">Карьера</a>
          </li>
          <li className="navigation__item">
            <a href="/#" className="navigation__link">Контакты</a>
          </li>
        </ul>
        <ul className="navigation__language">
          <li className="navigation__item navigation__item_lang">
            <a href="/#" className="navigation__link">en</a>
          </li>
          <li className="navigation__item navigation__item_lang">
            <a href="/#" className="navigation__link">ru</a>
          </li>
          <li className="navigation__item navigation__item_lang">
            <a href="/#" className="navigation__link">kz</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Burger