import "./Vacancies.scss"

const Vacancies = () => {
  return (
    <section className="vacancies vacancies_mb">
      <h1 className="vacancies__header vacancies__header_mb">Новые вакансии</h1>
      <ul className="vacancies__list">
        <li className="vacancies__item">
          <a href="/#">
            Главный iOS разработчик
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Главный Backend разработчик
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Главный Frontend разработчик
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Associate Product manager
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Главный Full-stack разработчик
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Senior Product Manager
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Senior Marketer
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Middle/Senior Product manager
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
        <li className="vacancies__item">
          <a href="/#">
            Junior / Middle Product Analyst
            <span className="vacancies__arrow">→</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Vacancies