
interface Lecture {

        name: string;
        time: string;
        cabinet: string;
        groups?: Array<string>
}

interface Day {
    name: string;
    lectures?: Array<{ even?:Lecture; odd?:Lecture, all?:Lecture }>
}

const mock: Array<Day> = [
    { name: 'Пн' },
    { name: 'Вт' },
    {
        name: 'Ср',
        lectures: [
        {
            even: { name: "Организация ЭВМ и систем", time: "8:40-10:15", cabinet: "344", groups: ["К-63Б"] },
            odd:  { name: "Организация ЭВМ и систем", time: "8:40-10:15", cabinet: "344", groups: ["К-64Б"] },
        },
            {all: { name: "Теория автоматов", time: "10:25-12:00", cabinet: "365", groups: ["К-43Б","К-44Б","К-45Б","К-46Б"] }},
            {
                even: { name: "Теория автоматов", time: "12:50-14:25", cabinet: "365", groups: ["К-46Б"] },
                odd:  { name: "Теория автоматов", time: "12:50-14:25", cabinet: "448", groups: ["К-46Б"] },
            },
            {
                even: { name: "Теория автоматов", time: "14:35-16:10", cabinet: "365", groups: ["К-45Б"] },
                odd:  { name: "Теория автоматов", time: "14:35-16:10", cabinet: "448", groups: ["К-45Б"] },
            },
            {all: { name: "Периферийные устройства ЭВМ", time: "10:25-12:00", cabinet: "448", groups: ["К-86Б"] }},
        ]
    },
    {
        name: 'Чт',
        lectures: [
            {
                even: { name: "Организация ЭВМ и систем", time: "8:40-10:15", cabinet: "344", groups: ["К-63Б"] },
                odd:  { name: "Организация ЭВМ и систем", time: "8:40-10:15", cabinet: "344", groups: ["К-64Б"] },
            },
            {all: { name: "Теория автоматов", time: "10:25-12:00", cabinet: "365", groups: ["К-43Б","К-44Б","К-45Б","К-46Б"] }},
            {
                even: { name: "Теория автоматов", time: "12:50-14:25", cabinet: "365", groups: ["К-46Б"] },
                odd:  { name: "Теория автоматов", time: "12:50-14:25", cabinet: "448", groups: ["К-46Б"] },
            },
            {
                even: { name: "Теория автоматов", time: "14:35-16:10", cabinet: "365", groups: ["К-45Б"] },
                odd:  { name: "Теория автоматов", time: "14:35-16:10", cabinet: "448", groups: ["К-45Б"] },
            },
            {all: { name: "Периферийные устройства ЭВМ", time: "10:25-12:00", cabinet: "448", groups: ["К-86Б"] }},
        ]
    },
    {
        name: 'Пт',
        lectures: [
            {
                even: { name: "Организация ЭВМ и систем", time: "8:40-10:15", cabinet: "344", groups: ["К-63Б"] },
                odd:  { name: "Организация ЭВМ и систем", time: "8:40-10:15", cabinet: "344", groups: ["К-64Б"] },
            },
            {all: { name: "Теория автоматов", time: "10:25-12:00", cabinet: "365", groups: ["К-43Б","К-44Б","К-45Б","К-46Б"] }},
            {
                even: { name: "Теория автоматов", time: "12:50-14:25", cabinet: "365", groups: ["К-46Б"] },
                odd:  { name: "Теория автоматов", time: "12:50-14:25", cabinet: "448", groups: ["К-46Б"] },
            },
            {
                even: { name: "Теория автоматов", time: "14:35-16:10", cabinet: "365", groups: ["К-45Б"] },
                odd:  { name: "Теория автоматов", time: "14:35-16:10", cabinet: "448", groups: ["К-45Б"] },
            },
            {all: { name: "Периферийные устройства ЭВМ", time: "10:25-12:00", cabinet: "448", groups: ["К-86Б"] }},
        ]
    },
    { name: 'Сб' },
];


const Day = ({day}: {day: Day}) => {
    return <div className="bg-white rounded-2xl shadow-lg min-w-[350px] max-w-[470px] min-h-[260px] flex flex-col overflow-hidden" >
        <h3 className="font-bold text-center bg-ocean text-white">{day.name}</h3>
        {day?.lectures ? day.lectures.map((el) => (<div className="h-12 gap-2 text-sm flex justify-between items-center gap-2 border-b border-b-black px-2 last:border-0 w-auto">
                {el?.all &&
                    <>
                      <span className="w-[40px] lg:w-[80px]">{el?.all?.time || "-"}</span>
                        <div className="flex gap-2 items-center lg:w-[350px] justify-between">
                            <span className="w-[140px] lg:w-[190px] overflow-hidden text-ellipsis">{el?.all?.name || "-"}</span>
                            <span className="w-[85px]">{el?.all?.groups?.join(' ') || "-"}</span>
                            <span className="w-[40px] text-right">{el?.all?.cabinet || "-"}</span>
                        </div>

                    </>
                }
                {(el?.odd || el?.even) &&
                    <>
                        <span className="w-[40px] lg:w-[80px]">{el?.odd?.time || el.even?.time || "-"}</span>
                        <div className="h-full lg:w-[350px]">
                            <div className="w-full lg:w-auto border-b-2 border-dashed border-b-gray-300 h-1/2 flex gap-2 justify-between">
                                <span className="w-[140px] lg:w-[190px] whitespace-nowrap overflow-hidden text-ellipsis">{el?.odd?.name || "-"}</span>
                                <span className="w-[85px]">{el?.odd?.groups || "-"}</span>
                                <span className="w-[40px] text-right">{el?.odd?.cabinet || "-"}</span>

                            </div>
                            <div className="w-full lg:w-auto h-1/2 flex gap-2 justify-between">
                                <span className="w-[140px] lg:w-[190px] whitespace-nowrap overflow-hidden text-ellipsis">{el?.even?.name || "-"}</span>
                                <span className="w-[85px]">{el?.even?.groups || "-"}</span>
                                <span className="w-[40px] text-right">{el?.even?.cabinet || "-"}</span>
                            </div>
                        </div>
                    </>

                }
            </div>
        )) : <span className="text-center align-middle text-2xl font-bold">Занятий нет</span>}
    </div>
}

const Schedule = () => {
    return <section>
        <h2 className="text-2xl text-center font-bold mb-4">Расписание занятий</h2>
        <div className="flex md:max-w-[710px] lg:max-w-[870px] lg:grid grid-cols-6 overflow-scroll md:overflow-auto md:grid-cols-2 gap-6 md:gap-2 mx-5 md:mx-0">
            {mock.map((el) => (
                <Day day={el} key={el.name} />
            ))}
        </div>
    </section>
}

export default Schedule;
