import Header from "../components/header/Header"
import Intro from "../components/intro/Intro"
import Products from "../components/products/Products"
import Team from "../components/team/Team"
import World from "../components/world/World"
import Vacancies from "../components/vacancies/Vacancies"
import Footer from "../components/footer/Footer"
import Sidebar from "../components/sidebar/Sidebar"
import './Main.scss';

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Products />
      <Team />
      <World />
      <Vacancies />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default Main