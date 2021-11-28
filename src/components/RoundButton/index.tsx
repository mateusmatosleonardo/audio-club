import React from "react";
import style from '../../styles/roundButton.module.scss';

interface RoundButtonProps{
    title: string;
}

const RoundButton = ({title}: RoundButtonProps) =>{
    return(
        <input className={style.input} type="button" value={title} />
    )
}

export default RoundButton;