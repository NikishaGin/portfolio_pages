import React from 'react';
import {SectionHeading} from "../../../components/SectionHeading/SectionHeading";
import style from './Contact.module.scss'
import {SubTitle} from "../../../components/SubTitle/SubTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";


export const Contact = () => {
    return (
        <section id={'contact'}>
            <SectionHeading tag={'CONTACT'} title={`Let's get in touch.`}/>
            <SubTitle text={"Fill out my form below and send me an email."}/>
            <form>
                <input type={"text"} name={"name"} placeholder={"* Name"} autoComplete={'off'}/>
                <input type={"text"} name={"email"} placeholder={"* E-Mail"} autoComplete={'off'}/>
                <input type={"text"} name={"phone"} placeholder={"Phone"} autoComplete={'off'}/>
                <textarea id={'contact-form-message'} name={'message'} placeholder={"* Message"}></textarea>
                <div className={style.button_area}>
                    <button type={"submit"}>
                        <span>Send</span>
                        <FontAwesomeIcon icon={faPaperPlane} style={{color: '#7c7c7c', fontSize: '1.3rem'}}/>
                    </button>
                    <p className={style.small_info_text}>* Marked fields are required to fill.</p>
                </div>
            </form>
        </section>
    );
};

