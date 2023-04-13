import TeacherCard from '../../components/TeacherCard/TeacherCard';
import Schedule from '../../components/Schedule/Schedule';
import Events from '../../components/Events/Events';
import { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-2">
      <Schedule />
      <div className="flex flex-col gap-14 lg:gap-2">
        <TeacherCard />
        <Events arr={[]} />
      </div>
    </section>
  );
};

export default MainPage;
