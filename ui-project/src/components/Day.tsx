import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";
import 'dayjs/locale/ko';
function Day(){
    let timer:any =null;
    const dayjsDate = dayjs();
    const[time,setTime] =useState(dayjsDate);
    console.log('hello');
    useEffect(() => {
        timer =setInterval (() => {
              setTime(dayjs());
        },1000);
        return () => {
            clearInterval(timer);
        };
    },[])

    return (
        <div>
            <h1>Day</h1>
            <div>{dayjsDate.format("YYYY년 MM월 DD일 ")}</div>
            <div>{dayjsDate.format('HH:mm:ss')}</div>


        </div>
    )
}

export  default  Day;