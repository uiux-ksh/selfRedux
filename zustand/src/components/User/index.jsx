import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import useUsers from "../../store/user";
import {useEffect,useState} from "react";
import {url} from "../../youtube/api";
import axios from "axios";
import '../../App.scss';
import Modal from "../Modal";
import Title from "../Title";

function User() {
    const { users, execute} =useUsers(state => state);
    const [vids ,setVids] =useState([]);
    const [isOpen,setIsOpen] =useState(false);
    const [index, setIndex] =useState(0);



    useEffect(() =>{
     axios.get(url).then(res => {
         setVids(res.data.items);

     }).catch(err => {
          console.log(err);
        });
    },[])
    const handleIdx =(idx) => {

        setIsOpen(true);
        setIndex(idx);
    }

 console.log(vids);
    return(
        <>
        <div className="SwiperSum">
            <Title text="로스트아크 " />
            <Swiper className='youtubeWrap' spaceBetween={20}  navigation
                    loop={true} breakpoints={{
                320: {slidesPerView: 2, spaceBetween: 5,},
                1200: {slidesPerView: 6, spaceBetween: 25,},
            }}
            >
                {vids.map((vid, idx) => {
                    if (idx > 15) return;
                    const tit = vid.snippet.title;
                    const desc = vid.snippet.description;
                    const thum = vid.snippet.thumbnails.medium.url;
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