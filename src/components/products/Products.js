import Slider from "react-slick"
import Aitu from "./img/aitu.svg"
import DigitalID from "./img/did.svg"
import AituPay from "./img/aitupay.svg"
import Suraqtar from "./img/suraqtar.svg"
import Dosmart from "./img/dosmart.svg"
import Kassa24 from "./img/kassa24.svg"
import "./Products.scss"

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  return (
    <section className="products">
      <h1 className="products__header products__header_mb">Продукты</h1>
      <p className="products__text">2,6 миллиона пользователей уже выбрали нас</p>
      <ul className="products__carousel">
        <Slider  {...settings}>
          <li className="products__carousel_block">
            <div className="products__carousel_inner">
              <div className="products__carousel_item">
                <img src={Aitu} alt="aitu" className="products__carousel_logo" />
                <div className="products__carousel_descr">
                  <p className="products__carousel_text">Платформа для общения, развлечения и решения ежедневных задач</p>
                </div>
              </div>
            </div>
          </li>
          <li className="products__carousel_block">
            <div className="products__carousel_inner">
              <div className="products__carousel_item">
                <img src={DigitalID} alt="digital ID" className="products__carousel_logo" />
                <div className="products__carousel_descr">
                  <p className="products__carousel_text">Платформа для общения, развлечения и решения ежедневных задач</p>
                </div>
              </div>
            </div>
          </li>
          <li className="products__carousel_block">
            <div className="products__carousel_inner">
              <div className="products__carousel_item">
                <img src={AituPay} alt="aituPay" className="products__carousel_logo" />
                <div className="products__carousel_descr">
                  <p className="products__carousel_text">Платформа для общения, развлечения и решения ежедневных задач</p>
                </div>
              </div>
            </div>
          </li>
          <li className="products__carousel_block">
            <div className="products__carousel_inner">
              <div className="products__carousel_item">
                <img src={Suraqtar} alt="suraqtar" className="products__carousel_logo" />
                <div className="products__carousel_descr">
                  <p className="products__carousel_text">Платформа для общения, развлечения и решения ежедневных задач</p>
                </div>
              </div>
            </div>
          </li>
          <li className="products__carousel_block">
            <div className="products__carousel_inner">
              <div className="products__carousel_item">
                <img src={Dosmart} alt="dosmart" className="products__carousel_logo" />
                <div className="products__carousel_descr">
                  <p className="products__carousel_text">Платформа для общения, развлечения и решения ежедневных задач</p>
                </div>
              </div>
            </div>
          </li>
          <li className="products__carousel_block">
            <div className="products__carousel_inner">
              <div className="products__carousel_item">
                <img src={Kassa24} alt="kassa24" className="products__carousel_logo" />
                <div className="products__carousel_descr">
                  <p className="products__carousel_text">Платформа для общения, развлечения и решения ежедневных задач</p>
                </div>
              </div>
            </div>
          </li>
        </Slider>
      </ul>
    </section>
  )
}

export default Products