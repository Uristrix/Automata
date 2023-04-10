import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Mainpage/Mainpage';
import ErrorPage from './pages/Errorpage/Errorpage';

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex flex-col w-full md:max-w-[710px] lg:max-w-[1600px] min-h-screen pt-[100px] mx-auto relative ">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
