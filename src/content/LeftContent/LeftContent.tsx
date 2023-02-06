import React from 'react';
import style from './LeftContent.module.scss'
import photo from '../../assets/image/photo_2023-01-27 18.41.55.jpeg'
// @ts-ignore
import Tilt from 'react-tilt'
import ReactTypingEffect from "react-typing-effect";


export const LeftContent = () => {
    return (
        <div className={style.left_content} style={{zIndex: 2}}>
            <div className={style.inner_content}>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div className={style.name} style={{opacity: 1}}>
                        <p><ReactTypingEffect text={['Nikita Sedov']}/></p>
                        <div className={style.line}></div>
                    </div>
                    <div className={style.picture_box}>
                        <img src={photo}/>
                    </div>
                    <div className={`${style.frame} ${style.frame_1}`}
                         style={{borderStyle: "solid", borderWidth: 0.1, borderColor: "white"}}>
                    </div>
                    <div className={`${style.frame} ${style.frame_2}`}
                         style={{borderStyle: "solid", borderWidth: 0.1, borderColor: "white"}}></div>
                    <div className={`${style.frame} ${style.frame_3}`}
                         style={{borderStyle: "solid", borderWidth: 0.1, borderColor: "white"}}></div>
                </Tilt>
            </div>
        </div>
    );
};

