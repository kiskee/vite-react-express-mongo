import React from "react";
import style from "../css/Day.module.css";

const DayContainer = ({ day , number}) => {


    let Img = `../../Day_${number+1}.png`



    return (
        <div className={style.card}>
            <center>
                <h4>
                    <b>{day}</b>
                </h4>
            </center>
            <img src={Img} className={style.img}/>
            <div className={style.container}>
                
                <div >
                    <center className={style.oval} >
0/0
                    </center>
                </div>
            </div>
        </div>
    );
};

export default DayContainer;
