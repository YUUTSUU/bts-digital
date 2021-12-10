import "./Intro.scss"
import Pix from "./pix.svg"

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__left">
        <h1 className="intro__header intro__header_mb">Мы создаем цифровые решения, меняющие жизнь людей к лучшему</h1>
        <p className="intro__text intro__text_mb">Компания BTS Digital создает цифровые продукты и сервисы, которые помогают людям в повседневной жизни.</p>
        <p className="intro__text">В экосистеме Aitu представлены проекты для жизни общества, ведения бизнеса и госуправления. Искусственный интеллект и Big Data - то, с чем в BTSD работают каждый день. Разработки компании актуальны на мировом рынке.</p>
        <div className="intro__btn_container">
          <a href="/#" className="intro__btn">
            Подать резюме
            <span className="intro__arrow">→</span>
          </a>
        </div>
      </div>
      <div className="intro__right">
        <img src={Pix} alt="intro" />
      </div>
    </section>
  )
}

export default Intro