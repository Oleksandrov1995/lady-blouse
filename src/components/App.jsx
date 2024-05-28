import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage/MainPage';
import { AgreementPage } from 'pages/AgreementPage/AgreementPage';

export const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/agreement" element={<AgreementPage />} />
        </Routes>
      </div>
    </>
  );
};
