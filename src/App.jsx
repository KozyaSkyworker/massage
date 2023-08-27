import './App.scss';
import About from './components/about/about';
import Collage from './components/collage/collage';
import Contacts from './components/contacts/contacts';
import Footer from './components/footer/footer';
import How from './components/how/how';
import Intro from './components/intro/intro';
import Services from './components/services/services';

function App() {
  return (
    <div className="wrapper">
      <Intro />
      <About />
      <Services />
      <How />
      <Collage />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
