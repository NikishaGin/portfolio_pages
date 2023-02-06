import React from 'react';
import style from "./Introduction.module.scss";


export const Introduction = () => {
    return (
        <section id={'home'} className={style.introductionContainer}>
            <div style={{position: "relative"}}>
                <div className={style.introduction}>
                    <p>INTRODUCTION</p>
                </div>
                <div className={style.text}>
                    <h1>I'm a Frontend Developer</h1>
                </div>
                <div className={style.line_box}>
                    <div className={style.line}></div>
                </div>
            </div>
        </section>
    );
};

