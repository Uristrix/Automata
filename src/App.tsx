import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Mainpage/Mainpage';
import ErrorPage from './pages/Errorpage/Errorpage';
import { Test1, Test2, Test3, Test4 } from './pages/Tests';

const App = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-between">
        <main className="flex flex-col w-full md:max-w-[710px] lg:max-w-[1600px] pt-[70px] md:pt-[100px] mx-auto relative ">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/test4" element={<Test4 />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
