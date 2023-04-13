import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="absolute text-3xl font-semibold top-[50%] text-center text-pseudo-white w-full">
      Oops.. такой ссылки нет...
      <br />
      Перейти на
      <Link className="text-blue" to="/" relative="path">
        {' '}
        главную →
      </Link>
    </section>
  );
};

export default ErrorPage;
