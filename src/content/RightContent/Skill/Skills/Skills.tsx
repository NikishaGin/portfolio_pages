import React from 'react';
import style from "./Skills.module.scss";
import {customAnimation} from "../../../../const/const";
import {Reveal} from "react-awesome-reveal";

type SkillsProps = {
    percent: string
    title: string
    widthLeft: number
}

export const Skills = (props: SkillsProps) => {
    return (
        <div className={style.skills_container}>
            <Reveal className={style.reveal} keyframes={customAnimation}>
                <div className={style.title}>
                    <h5>{props.title}</h5>
                </div>
            </Reveal>
            <div className={style.line}>
                <div className={style.fill}></div>
                <div className={style.number} style={{left: props.widthLeft}}>
                    <p>{props.percent}</p>
                </div>
            </div>
        </div>
    );
};

