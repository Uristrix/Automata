import Efremov from '../../assets/efremov.jpg';

const TeacherCard = () => {
  return (
    <section className=" relative max-w-[350px] md:max-w-full rounded-2xl bg-white flex flex-col md:flex-row shadow-md overflow-hidden mt-12 mx-auto md:mx-0">
      <img
        className="absolute object-cover backdrop-blur-3xl h-[350px] md:h-[260px] w-full md:w-auto"
        src={Efremov}
        alt="Efremov"
      />
      <img className="object-contain backdrop-blur-lg h-[350px] md:h-[260px]" src={Efremov} alt="Efremov" />
      <div className="w-full px-4 lg:px-8 pb-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold py-2">Ефремов Николай Владимирович</h2>
        <div className="flex flex-col text-lg [&>a]:w-auto text-sm">
          <div className="[&>span]:font-bold">
            <span>email: </span> <a href="mailto:nvlefremov@mail.ru">nvlefremov@mail.ru</a>
          </div>
          <div className="[&>span]:font-bold">
            <span>Должность, учёное звание: </span> доцент, кандидат технических наук
          </div>
          <div className="[&>span]:font-bold">
            <span>Образование: </span>МИФИ
          </div>
          <div className="[&>span]:font-bold">
            <span>Специальность: </span>Автоматизированные системы управления
          </div>
        </div>
        <form action="mailto:nvlefremov@mail.ru" className="mx-auto md:mx-0 mt-6 lg:mt-auto md:ml-auto">
          <button
            type="submit"
            className=" bg-ocean transition hover:bg-green border-0 rounded-xl text-base text-white text-center
                h-10 w-36"
          >
            Связаться
          </button>
        </form>
      </div>
    </section>
  );
};

export default TeacherCard;
