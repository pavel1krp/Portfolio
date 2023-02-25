import {FaPhone} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {VscLocation} from "react-icons/vsc";

export type ContactType = {
    title: string,
    description: string,
    icon: any
}

export const contacts: Array<ContactType> = [
    {
        title: 'Phone',
        description: '+375298575912',
        icon: FaPhone
    },
    {
        title: 'Location',
        description: 'Belarus, Minsk',
        icon: VscLocation
    },
    {
        title: 'Email',
        description: 'pavel07007@gmail.com',
        icon: AiOutlineMail
    }
]