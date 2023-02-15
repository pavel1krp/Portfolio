import {
    SiJavascript,
    SiHtml5,
    SiMaterialui,
    SiRedux,
    SiSass,
    SiStorybook,
    SiStyledcomponents,
    SiTypescript, SiTestinglibrary
} from "react-icons/si";
import {CgArrowsExchangeV} from "react-icons/cg";
import {TbApi} from "react-icons/tb";
import {GrReactjs} from "react-icons/gr";

export type SkillsType = {
    ID: number,
    title: string,
    Icons: any
    color: string,
}
export const skills:SkillsType[] =[
    {
        ID: 1,
        title: 'React',
        Icons: GrReactjs,
        color: 'rgb(96 221 255)',
    },
    {
        ID: 2,
        title: 'Redux',
        Icons: SiRedux,
        color: 'rgb(98 39 192)',
    },
    {
        ID: 3,
        title: 'JavaScript',
        Icons: SiJavascript,
        color: 'rgb(246 221 0)',
    },
    {
        ID: 4,
        title: 'TypesScript',
        Icons: SiTypescript,
        color: 'rgb(47 161 238)',
    },
    {
        ID: 5,
        title: 'Rest-API',
        Icons: TbApi,
        color: 'rgb(169 3 54)',
    },
    {
        ID: 6,
        title: 'Axios',
        Icons: CgArrowsExchangeV,
        color: 'rgb(89 10 218)',
    },
    {
        ID: 7,
        title: 'Html',
        Icons: SiHtml5,
        color: 'rgb(248 107 38)',
    },
    {
        ID: 8,
        title: 'SASS-SCSS',
        Icons: SiSass,
        color: 'rgb(194 27 111)',
    },
    {
        ID: 9,
        title: 'Styled-Components',
        Icons: SiStyledcomponents,
        color: 'rgb(199 227 61)',
    },
    {
        ID: 10,
        title: 'StoryBook',
        Icons: SiStorybook,
        color: 'rgb(235 83 134)',
    },
    {
        ID: 11,
        title: 'MUI',
        Icons: SiMaterialui,
        color: 'rgb(0 97 195)',
    },
    {
        ID: 12,
        title: 'Unit-tests',
        Icons: SiTestinglibrary,
        color: '#66bb6a',
    },
]
