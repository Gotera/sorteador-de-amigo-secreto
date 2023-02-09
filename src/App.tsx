import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configurations from './pages/Configurations';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configurations />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
