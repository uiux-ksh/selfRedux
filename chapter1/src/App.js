
import {useEffect, useRef, useState} from "react";
import './App.css';
import{Power3} from "gsap/gsap-core";
import gsap from 'gsap/all';

function App() {
  let circleRed = useRef(null);
  let circleBlue =useRef(null);
  const [isClick,setIsClick] =useState(false);

  const handleExpand = () => {
    gsap.to(circleRed.current,{width:"200px",height:"200px",ease:Power3.easeOut})
    setIsClick(true)
  }
  const handleShrink = () => {
    gsap.to(circleRed.current,{width:"75px",height:"75px",ease:Power3.easeOut})
    setIsClick(false);
  }

  useEffect(() => {
    gsap.fromTo(".circle ", {opacity:0.5},{
      opacity: 1,
      x:"130px",
      duration: 2,
    });
  },[]);
  const hello =() => {
    gsap.to(circleBlue.current,{rotate:270,width:150,height:150,duration:2});
  }
  const hello2 =() => {
    gsap.to(circleBlue.current,{rotate:0,width:75,height:75,duration:2});
  }
  return (
    <div className="App">
      <div className="circle-container">
        <div className="circle" ></div>
        <div className="circle red"   ref={circleRed} onClick={ !isClick ?  handleExpand : handleShrink }></div>
        <div className="circle blue"  ref={circleBlue} onMouseOver={hello} onMouseOut={hello2}></div>
      </div>
    </div>
  );
}

export default App;
