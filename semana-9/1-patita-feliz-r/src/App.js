import './App.css';
import Header from './components/secions/Header';

function App() {

  const company = {
    name: 'Patita Feliz',
    slogan: '🐭 La mejor veterinaria del Perú 🐭'
  };

  return (
    <Header company={company} />
  );
}

export default App;
