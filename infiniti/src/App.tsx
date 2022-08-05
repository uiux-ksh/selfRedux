import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {throttle} from "throttle-debounce";

interface  Airline {
    id:number;
    name:string;
    country:string;
    logo:string;
    slogan:string;
    head_quaters:string;
    website:string;
    established:string;
}

interface  Passenger {
    _id:string;
    name:string;
    trips:number;
    airline:Airline;
    __v:number;

}
function App() {
    const listRef =useRef<HTMLUListElement>(null);
    const cureentPage = useRef<number>(0); //현재 페이지

    const[passengers,setPassengers] =useState<Array<Passenger>>([]);
    const[isLast,setIsLast] =useState<boolean>(false);
    const [isScrollBottom,setIsScrollBottom] =useState<boolean>(false);

    const getPassengers = async (init?:boolean) => {
        const params ={page:cureentPage.current, size:50};
        try{
            const response = await axios.get('https://api.instantwebtools.net/v1/passenger',{params});

            const passengers = response.data.data;
            const isLast = response.data.totalPages === cureentPage.current;

            init ? setPassengers(passengers) : setPassengers(prev => [...prev, ...passengers]);
            setIsLast(isLast);
        }catch (e){
            console.log(e);
        }
    }
  const handleScroll = throttle(1000,() => {
        if(listRef.current) {
            const {scrollHeight,offsetHeight,scrollTop} =listRef.current;

            const offset =50;
            console.log(scrollTop,scrollHeight,offsetHeight);
            setIsScrollBottom(scrollHeight-offsetHeight-scrollTop < offset);
        }

  })

  useEffect(() => {
      if(isScrollBottom) {
          cureentPage.current += +1;

          !isLast && getPassengers();
      }
  },[isScrollBottom,isLast]);

    useEffect(() =>{
        getPassengers(true);
    },[]);

  return (
    <div className="App">
        <ul className="list" ref={listRef} onScroll={handleScroll}>
            <li className="item">
                {
                    passengers.map( passenger => (<li key={passenger._id} className='item_item'>{passenger.name}</li>))
                }
            </li>
        </ul>
    </div>
  );
}

export default App;
