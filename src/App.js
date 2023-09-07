import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar'
import Carousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Navbar/>
      </header>
      <Carousel/>
      <h1 className='font-extrabold'>Benjamin</h1>

    </div>
  );
}

export default App;
