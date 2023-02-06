import React from 'react';
import style from './SelectedWork.module.scss'
import {SectionHeading} from "../../../components/SectionHeading/SectionHeading";
import {SubTitle} from "../../../components/SubTitle/SubTitle";
import {Works} from "./Work/Works";


export const SelectedWork = () => {
    return (
        <section id={'selectedWork'} className={style.section_select_work}>
            <SectionHeading tag={'PORTFOLIO'}
                            title={`Selected Work`}
            />
            <SubTitle text={"Projects on which I honed the skill."}/>
                <div className={style.item_line}>
                    <Works name={'Todo List'} content={'Application with a to-do '}
                           continuation={'list using React/Redux.'}/>
                    <Works name={'Air Tickets'} content={'Analogue avia sales.'}/>
                    <Works name={'Calculator'} content={'Calculator using modern'} continuation={'technologies CSS3.'}/>
                </div>
        </section>
    );
};
