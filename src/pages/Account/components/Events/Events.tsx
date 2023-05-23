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
import { ReactComponent as Edit } from '../../../../assets/edit.svg';
import { ReactComponent as Close } from '../../../../assets/close.svg';

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

const header = ['Дата', 'Продолжительность', 'КР', 'Описание', ''];

const Item = (exEvent, setEdit, setOpenEvent, DeleteEvent) => {
  return [
    <div key={`date${exEvent?.id}`}>{new Date(exEvent.date).toLocaleTimeString('ru', formateDate)}</div>,
    <div key={`length${exEvent?.id}`}>{`${exEvent.length} мин`}</div>,
    <div key={`test_num${exEvent?.id}`}>{`КР${exEvent.test_num}`}</div>,
    <div key={`description${exEvent?.id}`}>{exEvent.description}</div>,
    <div className="flex items-center p-1 justify-end gap-2 w-full" key={`edit${exEvent.id}`}>
      <Edit
        className="cursor-pointer"
        onClick={() => {
          setEdit(exEvent);
          setOpenEvent(true);
        }}
      />
      <Close className="cursor-pointer" onClick={() => DeleteEvent(exEvent.id)} />
    </div>,
  ];
};
const Events = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(options[0]);
  const [openEvent, setOpenEvent] = useState(false);
  const [event, setEvent] = useState<Array<exEvent>>([]);
  const [filterEvent, setFilterEvent] = useState<Array<exEvent>>([]);
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
      .then(() => notification.setMessage('Событие удалёно', 'success'))
      .catch(() => notification.setMessage('Событие не удалёно', 'error'));
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
    if (filterEvent) {
      return filterEvent?.map((e) => {
        return Item(e, setEdit, setOpenEvent, DeleteEvent);
      });
    }
    return [[]];
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full m-3 md:m-0 items-start w-full lg:max-w-[580px] xl:max-w-[780px] 2xl:max-w-[1300px]">
        <div className="flex flex-col xl:flex-row w-full gap-4 items-center">
          <Search value={searchInput} onChange={setSearchInput} placeholder="Поиск" classes={{ root: 'w-full' }} />
          <Select
            value={selectedSort}
            onChange={setSelectedSort}
            options={options}
            placeholder="Сортировать по"
            classes={{ root: 'min-w-[300px] w-full' }}
          />
          <Button
            style="min-w-full xl:min-w-[200px]"
            onClick={() => {
              setEdit(null);
              setOpenEvent(true);
            }}
          >
            Добавить Событие
          </Button>
        </div>
        <Table header={header} items={generateItems()} classes={{ td: 'first:max-w-[100px] last:max-w-[40px]' }} />
      </div>
      <Modal open={openEvent} setOpen={setOpenEvent}>
        <AddEvent data={edit} trigger={() => setTrigger(!trigger)} rerender={Math.random()} />
      </Modal>
    </>
  );
};

export default Events;
