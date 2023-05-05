import { MdPeopleAlt, MdOutlinePending } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { BiGame } from "react-icons/";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export const cardsData = [
    {title:"Games completed", metrics: '1,305', icon: <IoCheckmarkDoneSharp/>},
    {title:"Total Games Played", metrics: '2,948',icon: <IoLogoGameControllerB/>},
    {title:"Total Pending Games", metrics: '182,059',icon: <BiGame/>},
    {title:"New Games", metrics: '58', icon: <MdPeopleAlt/> }
]