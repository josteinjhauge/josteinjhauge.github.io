import css from '../../assets/icons/skill-icons/CSS.png'
import react from '../../assets/icons/skill-icons/react.png'
import figma from '../../assets/icons/skill-icons/figma.png'
import firebase from '../../assets/icons/skill-icons/firebase.png'
import next from '../../assets/icons/skill-icons/next-js.png'
import ts from '../../assets/icons/skill-icons/TS.jpg'
import js from '../../assets/icons/skill-icons/JS.jpg'
import html from '../../assets/icons/skill-icons/HTML.png'
import xd from '../../assets/icons/skill-icons/XD.png'
import arduino from '../../assets/icons/skill-icons/arduino.png'
import ps from '../../assets/icons/skill-icons/ps.png'

export interface SkillType {
    name: string;
    link: string;
    imgUrl: string;
}

export interface SkillsType {
    development: SkillType[];
    design: SkillType[];
}

const listItems = {
    development: [
        {
            name: 'React',
            link: 'https://reactjs.org/',
            imgUrl: react,
        },
        {
            name: 'Next.js',
            link: 'https://nextjs.org/',
            imgUrl: next,
        },
        {
            name: 'React Native',
            link: 'https://reactnative.dev/',
            imgUrl: react,
        },
        {
            name: 'Typescript',
            link: 'https://www.typescriptlang.org/',
            imgUrl: ts,
        },
        {
            name: 'Javascript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            imgUrl: js,
        },
        {
            name: 'Firebase',
            link: 'https://firebase.google.com/',
            imgUrl: firebase,
        },
        {
            name: 'HTML',
            link: 'https://www.w3.org/html/',
            imgUrl: html,
        },
        {
            name: 'CSS & SCSS',
            link: 'https://sass-lang.com/',
            imgUrl: css,
        },
        {
            name: 'Arduino',
            link: 'https://www.arduino.cc/',
            imgUrl: arduino,
        },
    ],
    design: [
        {
            name: 'Figma',
            link: 'https://www.figma.com/',
            imgUrl: figma,
        },
        {
            name: 'Adobe XD',
            link: 'https://www.adobe.com/products/xd.html',
            imgUrl: xd,
        },
        {
            name: 'Adobe Photoshop',
            link: 'https://www.adobe.com/products/photoshop.html',
            imgUrl: ps,
        },
       
    ],
 } as SkillsType;

 export default listItems;