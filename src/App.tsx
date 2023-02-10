import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configurations from './pages/Configurations';
import Draw from './pages/Draw';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configurations />} />
          <Route path='/sorteio' element={<Draw />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
