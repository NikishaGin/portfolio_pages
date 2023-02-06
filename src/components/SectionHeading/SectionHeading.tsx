import React from 'react';
import style from './SectionHeading.module.scss'
import {Fade, Reveal} from "react-awesome-reveal";
import 'animate.css';
import {customAnimation} from "../../const/const";


type SectionHeadingProps = {
    tag: string
    title: string
    titleContinuation?: string
}


export const SectionHeading = (props: SectionHeadingProps) => {
    return (
        <div>
            <Reveal keyframes={customAnimation}>
                <div className={style.containerTag}>
                    <p>{props.tag}</p>
                </div>
            </Reveal>
            <Reveal keyframes={customAnimation}>
                <div className={style.containerTitle}>
                    <h3 className={style.title}>
                        {props.title}
                        <br/>
                        {props.titleContinuation}
                    </h3>
                </div>
            </Reveal>
            <Reveal keyframes={customAnimation}>
                <div className={style.line_box}>
                    <div className={style.line}></div>
                </div>
            </Reveal>
        </div>
    );
};

