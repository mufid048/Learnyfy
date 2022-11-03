import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BestVideo from './components/BestVideo';
import Navigationbar from './components/Navigationbar';
import Videoanalysis from './components/Videoanalysis';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BestVideo />}/>
        <Route path='/videoanalysis' element={<Videoanalysis />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
