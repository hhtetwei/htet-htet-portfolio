import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Card } from '@mui/material';

export default function Recommendations() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center text-2xl text-baseClr font-bold mt-5">
          What my colleagues say
        </div>
        <div className="mt-5 p-2">
          <Card className="p-2">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              style={{ paddingBottom: '60px' }}
            >
              <SwiperSlide>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo eius amet esse odit hic aliquid obcaecati recusandae
                incidunt unde omnis aut totam quod facilis, quos, voluptate
                dolorem magnam sit tempore.
              </SwiperSlide>
              <SwiperSlide>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, nihil? Recusandae, sit ab illo architecto,
                perspiciatis reprehenderit perferendis ducimus laboriosam sequi
                maiores dicta molestiae alias sunt reiciendis nemo temporibus
                itaque!
              </SwiperSlide>
            </Swiper>
          </Card>
        </div>
      </div>
    </>
  );
}
