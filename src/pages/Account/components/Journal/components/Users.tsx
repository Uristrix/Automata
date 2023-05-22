import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import { useState } from 'react';
import notification from '../../../../../store/notification';
import { Group } from '../../../../../model/group';
import { Inputs } from '../../../../../model/Inputs';
import { postUser } from '../../../../../utils/user';
import { read, utils } from 'xlsx';
const users = 'user';

const AddUser = ({ groups, trigger }: { groups: Array<Group>; trigger: () => void }) => {
  const [InputGroup, setInputGroup] = useState<{ value: string; label: string } | null>(null);
  const [inputUser, setInputUser] = useState<Inputs>({});
  const generateOption = groups.map((el) => ({ value: `${el.id}` || '', label: el.name || '' }));

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target!.result);
        const sheets = wb.SheetNames;
        const result = utils.sheet_to_json(wb.Sheets[sheets[0]]);
        console.log(result);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (InputGroup !== null) {
      await postUser({
        name: inputUser[users]?.name || '',
        login: inputUser[users]?.login || '',
        password: inputUser[users]?.password || '',
        role: false,
        group_id: Number(InputGroup.value) || 0,
      })
        .then(() => notification.setMessage('пользователь успешно добавлен', 'success'))
        .catch(() => notification.setMessage('Не удалось добавить пользователя', 'error'));
      trigger();
    }
  };

  return (
    <form className="h-[420px] w-[300px] md:w-[650px] md:w-full p-3" onSubmit={handlerSubmit}>
      <h2 className="w-full text-center text-xl font-semibold mb-5">Управление пользователями</h2>
      <div className="w-full flex flex-col items-center justify-between gap-4 mb-5">
        <Input
          placeholder={'ФИО'}
          value={inputUser[users]?.name || ''}
          onChange={(e) => setInputUser({ ...inputUser, [users]: { ...inputUser[users], name: e.target.value } })}
        />
        <Select value={InputGroup} onChange={setInputGroup} options={generateOption} classes={{ root: 'w-full' }} />
        <Input
          placeholder={'Логин'}
          value={inputUser[users]?.login || ''}
          onChange={(e) => setInputUser({ ...inputUser, [users]: { ...inputUser[users], login: e.target.value } })}
        />
        <Input
          placeholder={'Пароль'}
          value={inputUser[users]?.password || ''}
          onChange={(e) => setInputUser({ ...inputUser, [users]: { ...inputUser[users], password: e.target.value } })}
        />
        <Input
          type="file"
          name="file"
          className="custom-file-input"
          id="inputGroupFile"
          required
          onChange={handleImport}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
        <Button style="w-full md:w-[300px] mt-1" type="submit">
          Добавить
        </Button>
      </div>
    </form>
  );
};

export default AddUser;
