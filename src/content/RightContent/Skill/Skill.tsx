import React from 'react';
import {Skills} from "./Skills/Skills";
import {SectionHeading} from "../../../components/SectionHeading/SectionHeading";
import 'animate.css';
import style from './Skill.module.scss'



export const Skill = () => {
    return (
        <section id={'skill'} className={style.section_skill} >
            <SectionHeading tag={'SKILLS'}
                            title={'Skills I have collected'}
                            titleContinuation={'over the years and days.'}
            />
            <Skills widthLeft={270} percent={"70%"} title={"HTML/CSS"}/>
            <Skills widthLeft={230} percent={"50%"} title={"JavaScript"}/>
            <Skills widthLeft={250} percent={"60%"} title={"React/Redux"}/>
        </section>
    );
};

