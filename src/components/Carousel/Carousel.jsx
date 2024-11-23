import 'swiper/css';
import 'swiper/css/navigation';

import React, {
  useEffect,
  useRef,
} from 'react';

import { Navigation } from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  Box,
  Stack,
} from '@mui/material';

import LeftButton from '../../components/CarouselButton/LeftButton';
import RightButton from '../../components/CarouselButton/RightButton';
import MusicCard from '../../components/MusicCard/MusicCard';

const Carousel = ({ items}) => {
  // Ref for Swiper instance
  const swiperRef = useRef(null);
  

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = '.custom-prev';
      swiperRef.current.swiper.params.navigation.nextEl = '.custom-next';
      swiperRef.current.swiper.navigation.update();
    }
  }, [items]);
  // useEffect(()=>{
  //   console.log(items)
  //   console.log(genre)
  // },[])

  return (
    <Box sx={{ position: 'relative', padding: '20px 0' }}>
      
     

     
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        breakpoints={{
          0:{
              slidesPerView: 4
          },
          768: {
            slidesPerView: 5, 
          },
          
          1024: {
            slidesPerView: 7, 
         
          },
          
          // 1280: {
          //   slidesPerView: 7,
            
          // },
        }}
        spaceBetween={20} 
        slidesPerView={7}
      > <LeftButton />
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '20px' }}
            >
              <MusicCard
                image={item.image}
                albumName={item.title}
                chipContent={
                  item.follows 
                    ? `${item.follows} followers` 
                    : item.likes 
                    ? `${item.likes} likes` 
                    : "None"
                }
              />
            </Stack>
          </SwiperSlide>
        ))}
        <RightButton />
      </Swiper>

      
      
    </Box>
  );
};

export default Carousel;
