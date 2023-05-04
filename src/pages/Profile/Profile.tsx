import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import User from '../../store/user';
import Topics from '../../components/Topics/Topics';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

const Profile = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(User.user);
    // if (User.user === undefined) navigate('/');
  });

  return (
    <section>
      {User.user && (
        <section className="flex flex-col lg:flex-row justify-between gap-2 mx-5 md:mx-0">
          <Topics />
          <div className="flex flex-col-reverse lg:flex-col gap-2">
            <TeacherCard />
          </div>
        </section>
      )}
    </section>
  );
});

export default Profile;
