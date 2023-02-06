import React from 'react';
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from './Nav.module.scss'

type PropsType = {
    title: any
    to: string
    offset: number
}

export const Nav = (props: PropsType) => {
    return (
        <Link to={props.to} spy={true} smooth={true} duration={1000} offset={props.offset}>
            <FontAwesomeIcon icon={props.title}  className={style.font}/>
        </Link>
    );
};
