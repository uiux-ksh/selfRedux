import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import useUsers from "../../store/user";
import {useEffect,useState} from "react";
import {url} from "../../youtube/api";
import axios from "axios";
import '../../App.css';
import Modal from "../Modal";

function User() {
    const { users, execute} =useUsers(state => state);
    const [vids ,setVids] =useState([]);
    const [isOpen,setIsOpen] =useState(false);
    const [index, setIndex] =useState(0);



    useEffect(() =>{
     axios.get(url).then(res => {
         setVids(res.data.items);
         console.log(res.data);
     }).catch(err => {
          console.log(err);
        });
    },[])
    const handleIdx =(idx) => {

        setIsOpen(true);
        setIndex(idx);
    }


    return(
        <>
        <div>

            <Swiper className='youtubeWrap' spaceBetween={20}
                    loop={true} breakpoints={{
                320: {slidesPerView: 2, spaceBetween: 20,},
                1200: {slidesPerView: 6, spaceBetween: 10,},
            }}
            >
                {vids.map((vid, idx) => {
                    if (idx > 10) return;
                    const tit = vid.snippet.title;
                    const desc = vid.snippet.description
                    const thum = vid.snippet.thumbnails.maxres.url;
                    return (
                        <SwiperSlide key={idx} className='youtube' onClick={() => handleIdx(idx)}  disabled={true}>
                            <p><img src={thum} alt=""/></p>
                        </SwiperSlide>
                    )

                })}
            </Swiper>

        </div>
            {vids.length !== 0 && (
            <Modal isOpen ={isOpen} setIsOpen={setIsOpen}>

                <iframe
                    src={`https://www.youtube.com/embed/${vids[index].snippet.resourceId.videoId}`}
                    frameBorder='0'></iframe>

          </Modal>
                )}
        </>

    )
}

export default  User;