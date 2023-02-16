import {FaPhone} from "react-icons/fa";
import {BsTelegram} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

export type ContactType = {
    title:string,
    description: string,
    icon:any
}

export const contacts:Array<ContactType> = [
    {
        title:'Phone',
        description: '+375298575912',
        icon:FaPhone
    },
    {
        title:'Telegram',
        description: 'https://t.me/PavelShylin',
        icon:BsTelegram
    },
    {
        title:'Email',
        description: 'pavel07007@gmail.com',
        icon:AiOutlineMail
    }
]