import TeacherCard from '../../components/TeacherCard/TeacherCard';
import Schedule from '../../components/Schedule/Schedule';
import Events from '../../components/Events/Events';
import { useEffect } from 'react';

const event_mock = [
  {
    name: 'Контрольная работа №1',
    time: '-',
    groups: ['K3-43Б'],
    href: '/first_control',
  },
  {
    name: 'Контрольная работа №2',
    time: '-',
    groups: ['K3-44Б', 'K3-46Б'],
    href: '/second_control',
  },
  {
    name: 'Контрольная работа №2',
    time: '28.04.23 12:00',
    groups: ['K3-42Б', 'K3-43Б'],
    href: '/second_control',
  },
];

const MainPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-2 mx-5 md:mx-0">
      <Schedule />
      <div className="flex flex-col gap-14 lg:gap-2">
        <TeacherCard />
        <Events data={event_mock} />
      </div>
    </section>
  );
};

export default MainPage;
