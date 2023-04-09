import vk from '../../assets/social/vk.svg'
import telegram from '../../assets/social/telegram.svg'
import youtube from '../../assets/social/youtube.svg'

const Footer = () => {
    return <footer className="bg-dark-blue min-h-[100px] w-full flex flex-col md:flex-row items-center justify-between text-pseudo-white px-2 md:px-6 mt-20">
        <div className="flex flex-col gap-2 text-center md:text-start w-[300px] md:w-auto">
            <span>Мытищинский филиал МГТУ им. Н.Э.Баумана.</span>
            <span>141005, Московская область, г. Мытищи, ул. 1-я Институтская, д. 1.</span>
        </div>
        <div className= "flex flex-col gap-2">
            <span className=" text-base lg:text-2xl">8 495 583-64-90</span>
            <span className="flex gap-2 h-5 justify-evenly">
                <a href="https://vk.com/mf_bmstu">
                    <img className="h-full" src={vk} alt="vk" />
                </a>
                <a href="https://t.me/mf_bmstu">
                    <img className="h-full" src={telegram} alt="telegram" />
                </a>
                <a href="https://www.youtube.com/channel/UCjKYO0xWwb5HjxltTrv03FA">
                    <img className="h-full" src={youtube} alt="youtube" />
                </a>

            </span>
        </div>
    </footer>

}

export default Footer;
