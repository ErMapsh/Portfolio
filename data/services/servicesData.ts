import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi, AiOutlineMobile } from 'react-icons/ai'
import { IServices } from '../../interface/IServices'


export const servicesData: IServices[] = [

    {
        title: "Android/Ios Development",
        description: "I can build a beautiful and scalable app using <b>React Native</b>",
        Icon: AiOutlineMobile,
    },
    {
        title: "Frontend Development",
        description: "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.JS</b>, <b>NEXT.JS</b>, <b>ANGULAR</b>",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Development",
        description: "handle database, api using <b>Express</b> along with <b>MongoDB</b>",
        Icon: FaServer,
    },
    {
        title: "API Development",
        description: "I can develop robust REST API using <b>Node API</b>, <b>LARAVEL Lumen</b>",
        Icon: AiOutlineApi,
    },
    {
        title: "UI/UX designer",
        description: "stunning user interface designer using <b>Figma</b>.",
        Icon: AiOutlineAntDesign,
    },

]