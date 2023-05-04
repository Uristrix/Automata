import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Mainpage/Mainpage';
import ErrorPage from './pages/Errorpage/Errorpage';
import Profile from './pages/Profile/Profile';
import SchedulePage from './pages/Schedule/SchedulePage';
import { Test1, Test2, Test3, Test4 } from './pages/Tests';
import {
  Topic4_1,
  Topic4_10,
  Topic4_11,
  Topic4_12,
  Topic4_13,
  Topic4_14,
  Topic4_15,
  Topic4_16,
  Topic4_17,
  Topic4_18,
  Topic4_19,
  Topic4_2,
  Topic4_3,
  Topic4_4,
  Topic4_5,
  Topic4_6,
  Topic4_7,
  Topic4_8,
  Topic4_9,
} from './pages/Lectures';

const App = observer(() => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-between">
        <main className="flex flex-col w-full md:max-w-[710px] lg:max-w-[1600px] pt-[70px] md:pt-[100px] mx-auto relative ">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/test4" element={<Test4 />} />
            <Route path="/lecture">
              <Route path="/lecture/4_1" element={<Topic4_1 />} />
              <Route path="/lecture/4_2" element={<Topic4_2 />} />
              <Route path="/lecture/4_3" element={<Topic4_3 />} />
              <Route path="/lecture/4_4" element={<Topic4_4 />} />
              <Route path="/lecture/4_5" element={<Topic4_5 />} />
              <Route path="/lecture/4_6" element={<Topic4_6 />} />
              <Route path="/lecture/4_7" element={<Topic4_7 />} />
              <Route path="/lecture/4_8" element={<Topic4_8 />} />
              <Route path="/lecture/4_9" element={<Topic4_9 />} />
              <Route path="/lecture/4_10" element={<Topic4_10 />} />
              <Route path="/lecture/4_11" element={<Topic4_11 />} />
              <Route path="/lecture/4_12" element={<Topic4_12 />} />
              <Route path="/lecture/4_13" element={<Topic4_13 />} />
              <Route path="/lecture/4_14" element={<Topic4_14 />} />
              <Route path="/lecture/4_15" element={<Topic4_15 />} />
              <Route path="/lecture/4_16" element={<Topic4_16 />} />
              <Route path="/lecture/4_17" element={<Topic4_17 />} />
              <Route path="/lecture/4_18" element={<Topic4_18 />} />
              <Route path="/lecture/4_19" element={<Topic4_19 />} />
            </Route>
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
});

export default App;
