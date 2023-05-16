import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import { useState } from 'react';
import notification from '../../../../../store/notification';
import { Inputs } from '../../../../../model/Inputs';
import { postUser } from '../../../../../utils/user';

const event = 'event';

const AddEvent = ({ trigger }: { trigger: () => void }) => {
  const [InputEvent, setInputEvent] = useState<{ value: string; label: string } | null>(null);
  const [inputUser, setInputUser] = useState<Inputs>({});

  const handlerSubmit = async (e) => {
    e.preventDefault();
    // if (InputGroup !== null) {
    //   await postUser({
    //     name: inputUser[event]?.name || '',
    //     login: inputUser[event]?.login || '',
    //     password: inputUser[event]?.password || '',
    //     role: false,
    //     group_id: Number(InputGroup.value) || 0,
    //   })
    //     .then(() => notification.setMessage('Событие успешно добавлено', 'success'))
    //     .catch(() => notification.setMessage('Не удалось добавить событие', 'error'));
    trigger();
    // }
  };
  return (
    <form className="h-[400px] w-[300px] md:w-[650px] md:w-full p-3" onSubmit={handlerSubmit}>
      <h2 className="w-full text-center text-xl font-semibold mb-5">Добавить событие</h2>
      <div className="w-full flex flex-col items-center justify-between gap-4 mb-5">
        <Input
          placeholder={'продолжительность(мин)'}
          value={inputUser[event]?.name || ''}
          onChange={(e) => setInputUser({ ...inputUser, [event]: { ...inputUser[event], name: e.target.value } })}
        />
        <Select value={InputEvent} onChange={setInputEvent} classes={{ root: 'w-full' }} placeholder={'Работа'} />
        <Input
          type={'datetime-local'}
          placeholder={'Дата'}
          value={inputUser[event]?.password || ''}
          onChange={(e) => setInputUser({ ...inputUser, [event]: { ...inputUser[event], password: e.target.value } })}
        />
        <Button style="w-full md:w-[300px] mt-28" type="submit">
          Добавить
        </Button>
      </div>
    </form>
  );
};

export default AddEvent;
