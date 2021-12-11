import Slider from "react-slick"
import Team1 from "./img/team-1.jpg"
import Team2 from "./img/team-2.png"
import Team3 from "./img/team-3.jpg"
import Team4 from "./img/team-4.png"
import Team5 from "./img/team-5.png"
import Team6 from "./img/team-6.png"
import "./Team.scss"

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }

  return (
    <section className="team">
      <Slider {...settings}>
        <div>
          <div className="team__text_container">
            <div className="team__text">
              <h1 className="team__header team__header_white team__header_mb">Команда</h1>
              <img src={Team1} alt="team1" className="team__text_image" />
              <div className="team__wrapper">
                <div className="team__descr team__descr_white team__descr_mb">
                  У нас дружная атмосфера внутри команды, теплые взаимоотношения и обстановка, в которой хочется работать.
                </div>
                <div className="team__descr team__descr_white team__descr_mb">
                  В нашей команде
                  <h2 className="team__header">250+</h2>
                  профессионалов со всего Евразийского региона
                </div>
              </div>
            </div>
            <div className="team__image_container">
              <img src={Team1} alt="team1" className="team__image" />
            </div>
          </div>
        </div>
        <div>
          <div className="team__text_container">
            <div className="team__text">
              <h1 className="team__header team__header_white team__header_mb">Команда</h1>
              <img src={Team2} alt="team2" className="team__text_image" />
              <div className="team__wrapper">
                <div className="team__descr_text team__descr_white">
                  Асель Габдуллина
                  <div className="team__descr team__descr_white team__descr_mb-s">Junior Scrum Master в Marketplace</div>
                </div>
                <div className="team__descr team__descr_white">
                  Мир стремительно меняется, компании необходима гибкость, поэтому Scrum важен для разработки инновационных продуктов.
                </div>
                <div className="team__descr team__descr_white">
                  Миссия agile чаптера в нашей компании - “Мы - Change-лидеры, внедряя гибкие техники, создаем команды мотивированных профессионалов и фокусируем их на ценность для пользователя“. Свою работу я воспринимаю как определенный вызов, ведь хорошему скрам мастеру необходимо знать не только методологию, но и развивать в себе коммуникативные навыки, организаторские способности, лидерские качества, умение фасилитировать и многое другое.
                </div>
                <div className="team__descr team__descr_white">
                  Я благодарна за то, что компания поощряет стремление к самообразованию и развитию необходимых навыков для профессионального роста.
                </div>
              </div>
            </div>
            <div className="team__image_container">
              <img src={Team2} alt="team2" className="team__image" />
            </div>
          </div>
        </div>
        <div>
          <div className="team__text_container">
            <div className="team__text">
              <h1 className="team__header team__header_white team__header_mb">Команда</h1>
              <img src={Team3} alt="team3" className="team__text_image" />
              <div className="team__wrapper">
                <div className="team__descr_text team__descr_white">
                  Дмитрий Ковтун
                  <div className="team__descr team__descr_white team__descr_mb-s">Инженер-программист</div>
                </div>
                <div className="team__descr team__descr_white">
                  Привет! Меня зовут Дима. До BTS Digital работал в крупной компании. В моих правилах трудиться на благо продукта, поэтому работал даже тогда, когда и не должен был, но мой энтузиазм не был оценен. Один из сотрудников BTSD пригласил поработать в проекте. Мне понравилось, по сей день я здесь.
                </div>
                <div className="team__descr team__descr_white">
                  Ценю , что в BTSD можно развиваться в разных направлениях - вне основной должности. Я пришел сюда андроид разработчиком, получилось стать бекендером и немного фронтендером. Конечно, был бекграунд, но он был на старых технологиях. В этой компании я понял, что надо идти в ногу с технологиями, научился правильно их выбирать.
                </div>
                <div className="team__descr team__descr_white">
                  Думаю, основная ценность компании - люди. У каждого есть ценный опыт и знания, которые можно перенять, применить в своей работе.
                </div>
              </div>
            </div>
            <div className="team__image_container">
              <img src={Team3} alt="team3" className="team__image" />
            </div>
          </div>
        </div>
        <div>
          <div className="team__text_container">
            <div className="team__text">
              <h1 className="team__header team__header_white team__header_mb">Команда</h1>
              <img src={Team4} alt="team4" className="team__text_image" />
              <div className="team__wrapper">
                <div className="team__descr_text team__descr_white">
                  Дарья Гришко
                  <div className="team__descr team__descr_white team__descr_mb-s">Product manager в сфере социальных продуктов.</div>
                </div>
                <div className="team__descr team__descr_white">
                  В сфере IT работаю 8 лет. Мне нравится видеть весь процесс и собирать из разных задач готовое, работающее решение. Сейчас мы занимаемся социальными продуктами - для улучшения жизни людей. Благотворительность, информационные сервисы, некоторые проекты делаем вместе с гос.сектором. Фокус на удобстве для людей. Такая работа очень вдохновляет.
                </div>
                <div className="team__descr team__descr_white">
                  Каждый день понимаешь, что от тебя зависит, получат ли люди помощь, решатся ли их проблемы. Стараемся как можно больше и чаще говорить с пользователями, наверное, это любимая часть моей работы. Общаясь, понимаешь для кого создаешь продукты и любишь своих пользователей еще больше!
                </div>
                <div className="team__descr team__descr_white">
                  Мне очень повезло с командой, потому что каждый разделяет миссию - улучшение жизни людей и фокус на удобстве пользователей.
                </div>
              </div>
            </div>
            <div className="team__image_container">
              <img src={Team4} alt="team4" className="team__image" />
            </div>
          </div>
        </div>
        <div>
          <div className="team__text_container">
            <div className="team__text">
              <h1 className="team__header team__header_white team__header_mb">Команда</h1>
              <img src={Team5} alt="team5" className="team__text_image" />
              <div className="team__wrapper">
                <div className="team__descr_text team__descr_white">
                  Ислам Талапбаев
                  <div className="team__descr team__descr_white team__descr_mb-s">Product manager Dosmart</div>
                </div>
                <div className="team__descr team__descr_white">
                  Привет! Я работаю с супер умной, открытой к самым дерзким вызовам командой! Наша цель - строить прозрачные инструменты, помогающие нашим гражданам совершать самые выгодные покупки.
                </div>
                <div className="team__descr team__descr_white">
                  В нашей команде мы ценим самостоятельность и лидерство. Каждый член команды полностью управляет своим временем, своими задачами и максимально заряжен нашей общей целью.
                </div>
              </div>
            </div>
            <div className="team__image_container">
              <img src={Team5} alt="team5" className="team__image" />
            </div>
          </div>
        </div>
        <div>
          <div className="team__text_container">
            <div className="team__text">
              <h1 className="team__header team__header_white team__header_mb">Команда</h1>
              <img src={Team6} alt="team6" className="team__text_image" />
              <div className="team__wrapper">
                <div className="team__descr_text team__descr_white">
                  Полина Мыльникова
                  <div className="team__descr team__descr_white team__descr_mb-s">iOS-разработчик в Aitu</div>
                </div>
                <div className="team__descr team__descr_white">
                  Мобильная разработка — это тонкая грань между реализацией красивого дизайна, написанием простого и понятного кода и максимально эффективным расходованием ресурсов системы.
                </div>
                <div className="team__descr team__descr_white">
                  Почему iOS? Мне нравится подход к пользователю — максимально простой дизайн и продуманность мельчайших деталей.
                </div>
                <div className="team__descr team__descr_white">
                  Ничего лишнего, все должно быть очевидно и просто.
                </div>
              </div>
            </div>
            <div className="team__image_container">
              <img src={Team6} alt="team6" className="team__image" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default Team