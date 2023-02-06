import React from 'react';
import style from './Scroll.module.scss'

export const Scroll = () => {
    return (
        <div className={style.scroll_container}>
            <div className={style.line}>
                <div className={style.fill}></div>
            </div>
            <div className={style.text}>
                <p>SCROLL</p>
            </div>
        </div>
    );
};

