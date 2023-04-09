import TeacherCard from "../../components/TeacherCard/TeacherCard";
import Schedule from "../../components/Schedule/Schedule";
import Events from "../../components/Events/Events";

const MainPage = () => {
    return <section className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-16">
        <Schedule />
        <div className="flex flex-col gap-14 lg:gap-2">
            <TeacherCard />
            <Events  arr={[]}/>
        </div>

    </section>
}

export default MainPage;
