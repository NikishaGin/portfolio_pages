import React from 'react';
import style from './Menu.module.scss'
import {Nav} from "./Nav/Nav";
import {faBriefcase, faEnvelope, faGraduationCap, faHome} from "@fortawesome/free-solid-svg-icons";




export const Menu = () => {

    return (
        <div className={style.nav_container}>
            <div className={style.nav_burger}>
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </div>
            <div className={style.small_container}>
                <Nav title={faHome} to={'home'} offset={-200}/>
                <Nav title={faGraduationCap} to={'skill'} offset={-330}/>
                <Nav title={faBriefcase} to={'selectedWork'} offset={-180}/>
                <Nav title={faEnvelope} to={'contact'} offset={-200}/>
            </div>
        </div>
    );
};

