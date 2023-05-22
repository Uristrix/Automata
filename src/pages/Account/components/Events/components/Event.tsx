import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import { useEffect, useState } from 'react';
import { exEvent } from '../../../../../model/event';

const event = 'event';

const options = Array.from(Array(8).keys()).map((el, i) => ({ label: `КР${i + 1}`, value: `${i + 1}` }));
const AddEvent = ({ data, trigger }: { data: exEvent | null; trigger: () => void }) => {
  const [InputEvent, setInputEvent] = useState<{ value: string; label: string } | null>(null);
  const [input, setInput] = useState({});
  const [InputMulti, setInputMulti] = useState<{ value: string; label: string }[]>([]);
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

  useEffect(() => {
    if (data === null) {
      setInput({});
      setInputEvent(null);
    } else {
      input[event] = { length: data?.length, date: data?.date, description: data?.description };
      setInput((prev) => ({ ...prev, input }));
    }
  }, [data]);

  return (
    <form className="w-[300px] md:w-[650px] md:w-full p-3" onSubmit={handlerSubmit}>
      <h2 className="w-full text-center text-xl font-semibold mb-5">
        {data === null ? 'Добавить событие' : 'Изменить событие'}
      </h2>
      <div className="w-full flex flex-col items-center justify-between gap-4">
        <Input
          type="datetime-local"
          placeholder={'Дата'}
          value={input[event]?.date || ''}
          onChange={(e) => setInput({ ...input, [event]: { ...input[event], date: e.target.value } })}
        />
        <Input
          placeholder={'продолжительность (мин)'}
          value={input[event]?.length || ''}
          onChange={(e) => setInput({ ...input, [event]: { ...input[event], length: e.target.value } })}
        />
        <Select
          value={InputEvent}
          onChange={setInputEvent}
          classes={{ root: 'w-full' }}
          placeholder={'Контрольная'}
          options={options}
        />
        <Input
          variant="textarea"
          classes={{ input: 'min-h-[80px]' }}
          value={input[event]?.description || ''}
          onChange={(e) => setInput({ ...input, [event]: { ...input[event], description: e.target.value } })}
        />
        <Select
          isMulti={true}
          value={InputMulti}
          onChange={() => setInputMulti}
          classes={{ root: 'w-full' }}
          placeholder={'Пользователи'}
          options={options}
        />
        <Button style="w-full md:w-[300px] mt-5" type="submit">
          {data === null ? 'Добавить' : 'Изменить'}
        </Button>
      </div>
    </form>
  );
};

export default AddEvent;
