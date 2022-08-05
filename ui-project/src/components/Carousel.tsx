import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {RiArrowDropLeftLine,RiArrowDropRightLine} from "react-icons/ri";
import {useState} from "react";

const Base = styled.div`

`;

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.button<{pos:'left'| 'right'}>`
  position: absolute;
  top:50%;
  z-index: 1;
  padding:8px 12px;
  font-size: 48px;
  font-weight: bold;
  background-color:transparent;
  color:#fff;
  border:none;
  margin:0;
  cursor:pointer;
  ${({pos}) => pos === 'left' ? css `left: 0` : css`right:0`}
`;

const CarouseList = styled.ul`
  list-style: none;
  margin:0;
  padding:0;
  display: flex;
  overflow: hidden;
`;

const CarouselListItem = styled.li<{activeIndex:number}>`
  width:100%;
  flex: 1 0 100%;
  transform: translateX(-${({activeIndex}) =>  activeIndex * 100}%);
  transition: 200ms ease;
  > img {
    width: 100%;
    height: fit-content;
  }
  
`;

const NavButtion = styled.button<{isActive?:boolean}>`
  width:4px;
  height:4px;
  background-color:#000;
  opacity: ${({isActive}) => isActive ? 0.3: 0.1};

`;

const NavItem = styled.li`
  display: inline-block;
`;
const Nav = styled.ul`
  list-style: none;
  padding:0;
  margin:0 auto;
  display: flex;
  justify-content: center;
  ${NavItem} + ${NavItem} {
    margin-left: 4px;
  }
`;


const banners =['https://i.imgur.com/Jjl4Geq.jpg','https://t1.daumcdn.net/cfile/blog/236B8338567226A103','https://mblogthumb-phinf.pstatic.net/MjAxOTExMjJfMTIz/MDAxNTc0NDEwNzAwNDM2.xkCU70HXwI3baOOtEdVh0BYHBPHkNGbHFpaX3OQRqxIg.qGIY07xkQupXgGKkYqHvNZ2MAh5qsBtyQp_rQmNRuQ8g.JPEG.samkang1214/elsa_in_frozen_2_4k.jpg?type=w800'];
function Carousel(){
    const [activeIndex , setActiveIndex] =useState<number>(0);
    const handleNext = () => {
        setActiveIndex(prev => (activeIndex + 1) % banners.length);
    }
    const handlePrev = () => {
        setActiveIndex(prev => ( prev - 1 + banners.length));
    }
    const goTo =(idx:number) => {
        setActiveIndex(idx);
    }
    return(
       <Base>

           <Container>
               <ArrowButton pos ='left' onClick={handlePrev}>
                  <RiArrowDropLeftLine/>
               </ArrowButton>
               <CarouseList>
                   {
                       banners.map((banner,idx) =>(
                           <CarouselListItem  activeIndex={activeIndex}  key ={idx}>
                               <img src={banner} alt=""/>
                           </CarouselListItem>
                       ))
                   }
               </CarouseList>
               <ArrowButton pos ='right' onClick={handleNext}>
                   <RiArrowDropRightLine/>
               </ArrowButton>
           </Container>

       </Base>
    )
}

export  default Carousel;