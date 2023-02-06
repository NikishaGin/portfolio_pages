import React from 'react';
import style from "./Works.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignIn} from "@fortawesome/free-solid-svg-icons";


type WorksProps = {
    name: string
    content: string
    continuation?: string
}

export const Works = (props: WorksProps) => {
    return (
        <div className={style.item}>
            <p className={style.name_project}>{props.name}</p>
            <div className={style.content}>
                <p>{props.content}
                    <br/>
                    {props.continuation}
                </p>
                <a href={'https://github.com/NikishaGin/Avia_Info'}>
                    <FontAwesomeIcon icon={faSignIn} style={{color: '#7c7c7c',fontSize: '1.5rem'}}/>
                </a>
            </div>
        </div>
    );
};

