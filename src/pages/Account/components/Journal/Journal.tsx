import Button from '../../../../components/Button/Button';
import Table from '../../../../components/Table/Table';
import Select from '../../../../components/Select/Select';
import Search from '../../../../components/Search/Search';
import { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';
import Group from './components/Group';

const options = [
  { value: 'name+', label: 'По имени(возр.)' },
  { value: 'name-', label: 'По имени(убыв.)' },
  { value: 'group+', label: 'По группе(возр.)' },
  { value: 'group-', label: 'По группе(убыв.)' },
];

const header = ['ФИО', 'Группа', 'КР1', 'КР2', 'КР3', 'КР4', 'КР5', 'КР6', 'КР7', 'КР8'];
const items = [
  ['Ярославцев Егор Викторович', 'К3-83Б', '100', '80', '90', '76', '50', '0', '0', '0'],
  ['Наумов Сергей Алексеевич', 'К3-83Б', '100', '100', '100', '100', '50', '50', '50', '50'],
];

const Journal = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(null);
  const [openGroup, setOpenGroup] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4 w-full items-start w-full">
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center">
          <Search value={searchInput} onChange={setSearchInput} placeholder="Поиск" classes={{ root: 'w-full' }} />
          <Select
            value={selectedSort}
            onChange={setSelectedSort}
            options={options}
            placeholder="Сортировать по"
            classes={{ root: 'min-w-[300px] w-full md:w-auto' }}
          />
          <Button style="min-w-full lg:min-w-[200px]" onClick={() => setOpenUser(true)}>
            Добавить пользователей
          </Button>
          <Button style="min-w-full lg:min-w-[200px]" onClick={() => setOpenGroup(true)}>
            Добавить группу
          </Button>
        </div>
        <Table header={header} items={items} />
      </div>

      <Modal open={openGroup} setOpen={setOpenGroup}>
        <Group />
      </Modal>

      <Modal open={openUser} setOpen={setOpenUser}>
        <div></div>
      </Modal>
    </>
  );
};

export default Journal;
