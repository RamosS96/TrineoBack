import './App.css';
import FormResults from './pages/FormResults/FormResults';
import FormStats from './pages/FormStats/FormStats';


function App() {
  return (
    <div className="App">
      <h1> Carga de Estadisticas</h1>
      <FormStats/>
      <h1>Carga de Resultado</h1>
      <FormResults/>
    </div>
  );
}

export default App;
