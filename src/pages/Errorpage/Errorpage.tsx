import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="absolute text-3xl font-semibold top-96 text-center text-pseudo-white h-full w-full">
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
