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
        image: './profile_show.png',
        sub1: 'Personal Project',
        sub2: 'Frontend Development',
        tools: [
            './js_logo.png',
            './html5_logo.png',
            './css3_logo.png',
            './react_logo.png',
            './github_logo.png'
        ],
        des: 'https://github.com/PhotKosee/profile-react'
    },
    {
        id: 2,
        title: 'Dungeon Mania',
        image: './dungeon_show.png',
        sub1: 'UNSW project',
        sub2: 'Backend Development | OOP',
        tools: [
            './java_logo.png',
            './gitlab_logo.png'
        ],
        des: 'https://github.com/PhotKosee/dungeon-mania'
    },
    {
        id: 3,
        title: 'Communication Team',
        image: './communication_show.png',
        sub1: 'UNSW project',
        sub2: 'Backend Development',
        tools: [
            './js_logo.png',
            './ts_logo.png',
            './gitlab_logo.png',
        ],
        des: 'https://github.com/PhotKosee/team'
    },
    {
        id: 4,
        title: 'Back to Blackout',
        image: './blackout_show.png',
        sub1: 'UNSW project',
        sub2: 'Backend Development | OOP',
        tools: [
            './java_logo.png',
            './gitlab_logo.png',
        ],
        des: 'https://github.com/PhotKosee/blackout'
    },
    {
        id: 5,
        title: 'File System',
        image: './file_show.png',
        sub1: 'UNSW project',
        sub2: 'System calls implementation',
        tools: [
            './c_logo.png',
            './gitlab_logo.png',
        ],
        des: 'https://github.com/PhotKosee/file-management'
    },
    {
        id: 6,
        title: 'Tributary',
        image: './pro&con_show.png',
        sub1: 'UNSW project',
        sub2: 'Java API Development',
        tools: [
            './java_logo.png',
            './gitlab_logo.png',
        ],
        des: 'https://github.com/PhotKosee/event'
    },
    {
        id: 7,
        title: 'VM Fault Handling',
        image: './vm_show.png',
        sub1: 'UNSW project',
        sub2: 'HPT implementation',
        tools: [
            './c_logo.png',
            './gitlab_logo.png',
        ],
        des: 'https://github.com/PhotKosee/vm-fault'
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
                                    des={item.des}
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
