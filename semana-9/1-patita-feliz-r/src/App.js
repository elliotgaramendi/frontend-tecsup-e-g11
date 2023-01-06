import './App.css';
import Footer from './components/secions/Footer';
import Header from './components/secions/Header';

function App() {

  const company = {
    name: 'Patita Feliz',
    slogan: '🐭 La mejor veterinaria del Perú 🐭'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Elliot Garamendi'
  };

  return (
    <>
      <Header company={company} />
      <Footer credits={credits} />
    </>
  );
}

export default App;
