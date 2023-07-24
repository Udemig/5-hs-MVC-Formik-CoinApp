import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/login/LoginForm';
import MainPageController from './pages/mainpage/MainPageController';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/coins" element={<MainPageController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
