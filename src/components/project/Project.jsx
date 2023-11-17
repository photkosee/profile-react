import React from "react";
import "./project.css";
import Card from "./Card";
import { Projects } from "./storage";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Project = () => {
  return (
    <section className="project container" id="project">
      <div className="project__first">
        <h2 className="section__title project__name">Projects</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{
            "--swiper-navigation-color": "#dd7f7f",
            "--swiper-pagination-color": "#dd7f7f"
          }}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 2
            },
            900: {
              slidesPerView: 3
            },
          }}
          className={'swiper'}
        >
          {Projects.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className={'slide'}
              >
                <Card
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  sub1={item.sub1}
                  sub2={item.sub2}
                  tools={item.tools}
                  des={item.des}
                  live={item.live}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;
