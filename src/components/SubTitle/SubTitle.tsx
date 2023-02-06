import React from 'react';
import style from "./SubTitle.module.scss";
import {customAnimation} from "../../const/const";
import {Reveal} from "react-awesome-reveal";

type SubTitleProps = {
    text: string
}

export const SubTitle = (props: SubTitleProps) => {
    return (
        <Reveal keyframes={customAnimation}>
            <div className={style.element_width_container}>
                <p className={style.small}>{props.text}</p>
            </div>
        </Reveal>
    );
};

