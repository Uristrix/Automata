const Events = ({ arr }: { arr: any }) => {
  return (
    <section className="bg-white overflow-hidden rounded-2xl shadow-lg w-full min-h-[535px]">
      <h3 className="font-bold text-center bg-ocean text-white">Ближайшие События</h3>
      {arr.length !== 0 ? (
        arr.map((el: { time: any; name: any; groups: any[]; all: { cabinet: any } }, i: any) => (
          <div
            key={`event${i}`}
            className="h-12 gap-2 text-sm flex justify-between items-center gap-2 border-b border-b-black px-2 last:border-0 w-auto"
          >
            <span className="w-[40px] lg:w-[80px]">{el?.time || '-'}</span>
            <div className="flex gap-2 items-center lg:w-[350px] justify-between">
              <span className="w-[140px] lg:w-[190px] overflow-hidden text-ellipsis">{el?.name || '-'}</span>
              <span className="w-[85px]">{el?.groups?.join(' ') || '-'}</span>
              <span className="w-[40px] text-right">{el?.all?.cabinet || '-'}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center align-middle text-2xl font-bold">Ближайших событий</div>
      )}
    </section>
  );
};

export default Events;
