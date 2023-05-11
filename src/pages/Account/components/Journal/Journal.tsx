import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import UserTable from '../../../../components/Table/Table';
import Select from '../../../../components/Select/Select';
import Search from '../../../../components/Search/Search';
import { useState } from 'react';

const options = [
  { value: 'name+', label: 'По имени(возр.)' },
  { value: 'name-', label: 'По имени(убыв.)' },
  { value: 'group+', label: 'По группе(возр.)' },
  { value: 'group-', label: 'По группе(убыв.)' },
];

const Journal = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(null);
  return (
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
        <Button style="min-w-full lg:min-w-[200px]">Добавить пользователей</Button>
        <Button style="min-w-full lg:min-w-[200px]">Добавить группу</Button>
      </div>
      <UserTable header={undefined} items={undefined} />
    </div>
  );
};

export default Journal;
