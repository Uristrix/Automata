import TeacherCard from '../../components/TeacherCard/TeacherCard';
import Events from '../../components/Events/Events';
import { useEffect } from 'react';
import Topics from '../../components/Topics/Topics';

const event_mock = [
  {
    name: 'Контрольная работа №1',
    time: '-',
    groups: ['K3-43Б'],
    href: '/test1',
  },
  {
    name: 'Контрольная работа №2',
    time: '-',
    groups: ['K3-44Б', 'K3-46Б'],
    href: '/test2',
  },
  {
    name: 'Контрольная работа №3',
    time: '28.04.23 12:00',
    groups: ['K3-42Б', 'K3-43Б'],
    href: '/test3',
  },
  {
    name: 'Контрольная работа №4',
    time: '28.05.23 12:00',
    groups: ['K3-42Б', 'K3-43Б', 'K3-44Б', 'K3-46Б'],
    href: '/test4',
  },
];

const MainPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-2 mx-5 md:mx-0">
      <Topics />
      <div className="flex flex-col-reverse lg:flex-col gap-2">
        <TeacherCard />
        <Events data={event_mock} />
      </div>
    </section>
  );
};

export default MainPage;
