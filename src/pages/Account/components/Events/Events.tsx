import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import Search from '../../../../components/Search/Search';
import Select from '../../../../components/Select/Select';
import { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';
import AddEvent from './components/Event';

const options = [
  { value: 'date+', label: 'По дате(возр.)' },
  { value: 'date-', label: 'По дате(убыв.)' },
];

const Events = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(null);
  const [openEvent, setOpenEvent] = useState(false);
  const [event, setEvent] = useState({});
  const [trigger, setTrigger] = useState<boolean>(true);

  return (
    <>
      <div className="flex flex-col gap-4 w-full m-3 md:m-0 items-start w-full">
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center">
          <Search value={searchInput} onChange={setSearchInput} placeholder="Поиск" classes={{ root: 'w-full' }} />
          <Select
            value={selectedSort}
            onChange={setSelectedSort}
            options={options}
            placeholder="Сортировать по"
            classes={{ root: 'min-w-[300px] w-full' }}
          />
          <Button style="min-w-full lg:min-w-[200px]" onClick={() => setOpenEvent(true)}>
            Добавить Событие
          </Button>
        </div>
      </div>
      <Modal open={openEvent} setOpen={setOpenEvent}>
        <AddEvent trigger={() => setTrigger(!trigger)} />
      </Modal>
    </>
  );
};

export default Events;
