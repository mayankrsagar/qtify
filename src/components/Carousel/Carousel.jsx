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

const Carousel = ({ items }) => {
  // Ref for Swiper instance
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = '.custom-prev';
      swiperRef.current.swiper.params.navigation.nextEl = '.custom-next';
      swiperRef.current.swiper.navigation.update();
    }
  }, [items]);

  return (
    <Box sx={{ position: 'relative', padding: '20px 0' }}>
      
     

     
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        
        spaceBetween={20} // Adjust as per your design
        slidesPerView={7} // Adjust for responsiveness
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
                follows={`${item.follows} Followers`}
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
