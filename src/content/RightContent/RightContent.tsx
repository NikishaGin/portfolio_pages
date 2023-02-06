import React from 'react';
import style from './RightContent.module.scss'
import {Introduction} from "./Introduction/Introduction";
import {Skill} from "./Skill/Skill";
import {Contact} from "./Contact/Contact";
import {SelectedWork} from "./SelectedWork/SelectedWork";
import {Particle} from "../../components/Particle/Particle";
import {Menu} from "./Menu/Menu";
import {Scroll} from "./Scroll/Scroll";



export const RightContent = () => {
    return (
        <div className={style.right_content}>
            <div className={style.inner_content}>
                <Particle/>
                <Menu/>
                <Scroll/>
                <Introduction/>
                <Skill/>
                <SelectedWork/>
                <Contact/>
            </div>
        </div>
    );
};

