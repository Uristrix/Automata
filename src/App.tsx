import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Mainpage/Mainpage';
import ErrorPage from './pages/Errorpage/Errorpage';
import Account from './pages/Account/Account';
import SchedulePage from './pages/Schedule/SchedulePage';
import { Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8 } from './pages/Tests';
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
  Topic3_1,
  Topic3_2,
  Topic3_3,
  Topic3_4,
  Topic3_5,
  Topic3_6,
  Topic3_7,
  Topic3_8,
  Topic3_9,
  Topic3_10,
  Topic3_11,
  Topic3_12,
  Topic3_13,
  Topic3_14,
  Topic3_15,
  Topic3_16,
  Topic3_17,
  Topic3_18,
  Topic3_19,
  Topic3_20,
  Topic3_21,
  Topic3_22,
  Topic2_1,
  Topic2_2,
  Topic2_3,
  Topic2_4,
  Topic2_5,
} from './pages/Lectures';

axios.defaults.baseURL = process.env.REACT_APP_API;

const App = observer(() => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-between">
        <main className="flex flex-col w-full md:max-w-[710px] min-[1000px]:max-w-[1250px] lg:max-w-[1600px] pt-[70px] md:pt-[100px] mx-auto relative ">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/test3" element={<Test3 />} />
            <Route path="/test4" element={<Test4 />} />
            <Route path="/test5" element={<Test5 />} />
            <Route path="/test6" element={<Test6 />} />
            <Route path="/test7" element={<Test7 />} />
            <Route path="/test8" element={<Test8 />} />
            <Route path="/lecture">
              <Route path="/lecture/2_1" element={<Topic2_1 />} />
              <Route path="/lecture/2_2" element={<Topic2_2 />} />
              <Route path="/lecture/2_3" element={<Topic2_3 />} />
              <Route path="/lecture/2_4" element={<Topic2_4 />} />
              <Route path="/lecture/2_5" element={<Topic2_5 />} />
              <Route path="/lecture/3_1" element={<Topic3_1 />} />
              <Route path="/lecture/3_2" element={<Topic3_2 />} />
              <Route path="/lecture/3_3" element={<Topic3_3 />} />
              <Route path="/lecture/3_4" element={<Topic3_4 />} />
              <Route path="/lecture/3_5" element={<Topic3_5 />} />
              <Route path="/lecture/3_6" element={<Topic3_6 />} />
              <Route path="/lecture/3_7" element={<Topic3_7 />} />
              <Route path="/lecture/3_8" element={<Topic3_8 />} />
              <Route path="/lecture/3_9" element={<Topic3_9 />} />
              <Route path="/lecture/3_10" element={<Topic3_10 />} />
              <Route path="/lecture/3_11" element={<Topic3_11 />} />
              <Route path="/lecture/3_12" element={<Topic3_12 />} />
              <Route path="/lecture/3_13" element={<Topic3_13 />} />
              <Route path="/lecture/3_14" element={<Topic3_14 />} />
              <Route path="/lecture/3_15" element={<Topic3_15 />} />
              <Route path="/lecture/3_16" element={<Topic3_16 />} />
              <Route path="/lecture/3_17" element={<Topic3_17 />} />
              <Route path="/lecture/3_18" element={<Topic3_18 />} />
              <Route path="/lecture/3_19" element={<Topic3_19 />} />
              <Route path="/lecture/3_20" element={<Topic3_20 />} />
              <Route path="/lecture/3_21" element={<Topic3_21 />} />
              <Route path="/lecture/3_22" element={<Topic3_22 />} />
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
