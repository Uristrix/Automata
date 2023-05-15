import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

const Events = () => {
  return (
    <div className="flex flex-col gap-4 w-full m-3 md:m-0 items-start w-full">
      <div className="flex flex-col lg:flex-row w-full gap-4 items-center">
        <Input placeholder="Поиск" />
        <Input placeholder="Сортировка" />
        <Button style="min-w-full lg:min-w-[200px]">Добавить Событие</Button>
      </div>
    </div>
  );
};

export default Events;