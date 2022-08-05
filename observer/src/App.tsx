import React, {ReactElement, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {constants} from "os";
import userInterfaceObserver from "./hooks/observer";


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
interface  Props {
    isLastItem :boolean;
    onFetchMorePassengers:() => void;
    children:ReactElement | string;

}
const Passenger:React.FC<Props> = ({isLastItem,onFetchMorePassengers,children  }) => {
    const ref =useRef<HTMLDivElement | null >(null);
    const entry =userInterfaceObserver(ref,{});
    const isIntersecting = !!entry?.isIntersecting;


    useEffect(() => {
        isLastItem && isIntersecting && onFetchMorePassengers();
    },[isLastItem,isIntersecting])

    return(
        <div
             ref={ref}
            style={{
            minHeight:'100vh',
            display:'flex',
            border:'1px dashed #000',

        }}>
            {children}
        </div>
    )
}


function App() {
   const [passengers,setPassengers] = useState<Array<Passenger>>([]);
   const [isLast, setIsLast] = useState<boolean>(false);
   const [page,setPage] =useState<number>(0);

  const getPassengers = async (init?:boolean) => {
    const params ={page,size:10};
    try{
       const res = await  axios.get('https://api.instantwebtools.net/v1/passenger',{params})
       const passengers = res.data.data;
       const isLast = res.data.totalPages === page;

        init ? setPassengers(passengers) : setPassengers(prev => [...prev, ...passengers]);
        setIsLast(isLast);
    }catch (e){
      console.log(e);
    }
  }

  useEffect(() =>{
      isLast && getPassengers();
  },[page])

    useEffect(() =>{
        getPassengers(true);
    },[]);

  return (
    <div className="App">
        {
            passengers.map((passenger,idx) => {
                return(
                    <Passenger key={passenger._id} isLastItem = {passengers.length -1 === idx}
                               onFetchMorePassengers={() => setPage(prev => page +1 )}
                    >{passenger.name}</Passenger>
                )
            })
        }
    </div>
  );
}

export default App;
