import Button from '../../../../components/Button/Button';
import Search from '../../../../components/Search/Search';
import Select from '../../../../components/Select/Select';
import React, { useEffect, useState } from 'react';
import Modal from '../../../../components/Modal/Modal';
import AddEvent from './components/Event';
import { exEvent } from '../../../../model/event';
import { Inputs } from '../../../../model/Inputs';
import { deleteEvent, EventStatus, getAllEvent } from '../../../../utils/event';
import notification from '../../../../store/notification';
import Table from '../../../../components/Table/Table';

// const sortCreatedAtAsc = (a, b) => {
//   if (new Date(a.created ?? null) < new Date(b.created ?? null)) {
//     return -1;
//   }
//   return 1;
// };
//
// const sortCreatedAtDesc = (a, b) => {
//   if (new Date(a.created ?? null) > new Date(b.created ?? null)) {
//     return -1;
//   }
//   return 1;
// };
const formateDate: object = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const options = [
  { value: 'date+', label: 'По дате (возр.)' },
  { value: 'date-', label: 'По дате (убыв.)' },
];

const header = ['Дата', 'Продолжительность', 'КР', 'Статус', 'Описание', ''];

const Item = (exEvent, setEdit, setOpenEvent, DeleteEvent) => {
  return [
    <div key={`date${exEvent?.id}`}>{new Date(exEvent.date).toLocaleTimeString('ru', formateDate)}</div>,
    <div key={`length${exEvent?.id}`}>{`${exEvent.length} мин`}</div>,
    <div key={`test_num${exEvent?.id}`}>{`КР${exEvent.test_num}`}</div>,
    <div key={`test_status${exEvent?.id}`}>{EventStatus(exEvent.test_status)}</div>,
    <div key={`description${exEvent?.id}`}>{exEvent.description}</div>,
  ];
};
const Events = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(options[0]);
  const [openEvent, setOpenEvent] = useState(false);
  const [event, setEvent] = useState<Array<exEvent>>([]);
  const [filterEvent, setFilterEvent] = useState<Array<exEvent>>([]);
  const [inputs, setInputs] = useState<Inputs>({});
  const [edit, setEdit] = useState<exEvent | null>(null);
  const [trigger, setTrigger] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      await getAllEvent()
        .then((res) => setEvent(res.payload))
        .catch(() => notification.setMessage('Не удалось запросить данные', 'error'));
    })();
  }, [trigger]);

  useEffect(() => {
    sorting();
  }, [event, selectedSort]);

  const DeleteEvent = async (id) => {
    await deleteEvent(id)
      .then(() => notification.setMessage('Пользователь удалён', 'success'))
      .catch(() => notification.setMessage('Пользователь не удалён', 'error'));
    setTrigger(!trigger);
  };

  const sorting = () => {
    let data: Array<exEvent> = [];
    switch (selectedSort?.value) {
      case 'date+':
        data = [...event].sort((a, b) => a.date.localeCompare(b.date));
        break;
      case 'date-':
        data = [...event].sort((a, b) => a.date.localeCompare(b.date)).reverse();
        break;
      default:
        break;
    }
    setFilterEvent(data.filter((el) => el.description.toLowerCase().includes(searchInput.toLowerCase())));
  };

  const generateItems = () => {
    console.log(event, filterEvent);
    if (filterEvent) {
      return filterEvent?.map((e) => {
        return Item(e, setEdit, setOpenEvent, DeleteEvent);
      });
    }
    return [[]];
  };
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
        <Table header={header} items={generateItems()} classes={{ td: 'first:max-w-[100px] last:max-w-[40px]' }} />
      </div>
      <Modal open={openEvent} setOpen={setOpenEvent}>
        <AddEvent trigger={() => setTrigger(!trigger)} />
      </Modal>
    </>
  );
};

export default Events;
