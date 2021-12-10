import Header from "../header/Header"
import Intro from "../intro/Intro"
import Products from "../products/Products"
import Team from "../team/Team"
import World from "../world/World"
import Vacancies from "../vacancies/Vacancies"
import Footer from "../footer/Footer"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"
import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <ErrorBoundary>
        <Products />
      </ErrorBoundary>
      <Team />
      <World />
      <ErrorBoundary>
        <Vacancies />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App