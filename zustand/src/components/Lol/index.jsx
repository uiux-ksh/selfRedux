import useUsers from "../../store/user";
import {useEffect} from "react";
import {url2} from "../../constant/api";
import Title from "../Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import useCount from "../../store/count";
function Lol({index,setIndex}) {

    const { users,execute} = useUsers(state => state);
    const {count,plusCount} = useCount(state => state)
    useEffect(() => {
        execute(url2);
    },[])


  // console.log(users);
    return(
        <>
        <Title text="리그오브레전드" />
        <div>
           <Swiper
               spaceBetween={20}  navigation
               loop={true} breakpoints={{
               320: {slidesPerView: 2, spaceBetween: 5,},
               1200: {slidesPerView: 6, spaceBetween: 25,},
           }}
           >{users.map((user,idx) => {
                return <SwiperSlide className='youtube' key ={idx}   onClick={plusCount}>
                            <p>
                                <img src={`${user.snippet.thumbnails.medium.url}`} alt=""/>

                            </p>

                       </SwiperSlide>


            })}
           </Swiper>

        </div>
        </>
    )
}
export default  Lol;