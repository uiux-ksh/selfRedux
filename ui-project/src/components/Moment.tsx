import moment from "moment-timezone";
import "moment/locale/ko";
import {useRef, useState} from "react";


function  Moment() {
    const momentDate =moment();
    const newMomentDate =momentDate.add(1,'week');
    const cloneNewMomentDate = newMomentDate.clone().add(1,'week');


    const [day,setDay] =useState("");
    const birthDayRef =useRef(null);
    const handleBirthDayChange = (event:any) => {
      setDay(moment(event.target.value,"YYYY-MM-DD").format("MM-DD dddd"));
    }
    return(
        <div>
       <h1>Moment</h1>
            <div>Immutable check</div>
            <div>
                <p>{momentDate.format()}</p>
                <p>{newMomentDate.format()}</p>
                <p>{cloneNewMomentDate.format()}</p>
            </div>
            <br/>
            <div>Summer time (New -york)</div>
            <div>
                2018년 3월 10일에 13일 더하기;
                {moment.tz("2018-03-10 13:00:00","America/New_York").add(1,"day").format()}
            </div>
            <div>
                2018년 3월 10일에 13일 더하기;
                {moment.tz("2018-03-10 13:00:00","America/New_York").add(24-1,"hour").format()}
            </div>

            <div>
                <h1>윤년 구하자</h1>
                <p>2017년 1월 1일에 365일 빼기 </p>
                {moment("2017-01-01").subtract(1,"year").format()}
                <br />
                {moment("2017-01-01").subtract(365,"day").format()}

                <br />
                <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
                <div>{moment("07-17-2021").format('YYYY년 M월 D일')}</div>
                <br />
                 <div>자기 생일 요일찾기</div>
                 <div>
                     <input type="date" ref={birthDayRef} onChange={handleBirthDayChange}/>
                     <div>무슨 요일었을까요?</div>
                     <div>{day}</div>
                 </div>
                <br />
                <div>두날짜 비교</div>
                <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가</div>
                <div>{moment('2021-07-17 03:00').diff(moment('2021-07-18 02:00'), 'hours')}시간</div>
            </div>
        </div>
    )
}
export  default  Moment;