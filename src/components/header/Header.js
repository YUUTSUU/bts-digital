import "./Header.scss"
import logo from "./logo-main.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="header__menu">
          <li className="header__menu_item">
            <a href="/#">Продукты</a>
          </li>
          <li className="header__menu_item">
            <a href="/#">Партнерам</a>
          </li>
          <li className="header__menu_item">
            <a href="/#">О нас</a>
          </li>
          <li className="header__menu_item">
            <a href="/#">Карьера</a>
          </li>
          <li className="header__menu_item">
            <a href="/#">Контакты</a>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <ul className="header__language">
          <li className="header__language_item">
            <a href="/#">en</a>
          </li>
          <li className="header__language_item">
            <a href="/#">ru</a>
          </li>
          <li className="header__language_item">
            <a href="/#">kz</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header