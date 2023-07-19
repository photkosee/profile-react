import React from "react";
import "./project.css";
import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Projects = [
    {
        id: 1,
        title: 'Profile Website',
        image: '/profile_show.png',
        sub1: 'Personal Project',
        sub2: 'Frontend Development',
        tools: [
            '/js_logo.png',
            '/html5_logo.png',
            '/css3_logo.png',
            '/react_logo.png',
            '/github_logo.png'
        ]
    },
    {
        id: 2,
        title: 'Dungeon Mania',
        image: '/dungeon_show.png',
        sub1: 'UNSW project',
        sub2: 'Backend Development | OOP',
        tools: [
            '/java_logo.png',
            '/gitlab_logo.png'
        ]
    },
    {
        id: 3,
        title: 'Communication Team',
        image: '/communication_show.png',
        sub1: 'UNSW project',
        sub2: 'Backend Development',
        tools: [
            '/js_logo.png',
            '/ts_logo.png',
            '/gitlab_logo.png',
        ]
    },
    {
        id: 4,
        title: 'Blackout',
        image: '/communication_show.png',
        sub1: 'UNSW project',
        sub2: 'Backend Development | OOP',
        tools: [
            '/java_logo.png',
            '/gitlab_logo.png',
        ]
    },
    {
        id: 5,
        title: 'File System',
        image: '/communication_show.png',
        sub1: 'UNSW project',
        sub2: 'System calls implementation',
        tools: [
            '/c_logo.png',
            '/gitlab_logo.png',
        ]
    },
    {
        id: 6,
        title: 'Consumer & Producer',
        image: '/communication_show.png',
        sub1: 'UNSW project',
        sub2: 'CLI Development',
        tools: [
            '/java_logo.png',
            '/gitlab_logo.png',
        ]
    },
    {
        id: 7,
        title: 'VM Fault Handling',
        image: '/communication_show.png',
        sub1: 'UNSW project',
        sub2: 'HPT implementation',
        tools: [
            '/c_logo.png',
            '/gitlab_logo.png',
        ]
    }
];

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
