import React from "react";
import "./card.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Card = () => {
    return (
        <Swiper 
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="slide-container"
        >
            <div className="slide-content">
                <div className="card-wrapper">
                    <SwiperSlide className="card">
                        <div className="image-content">
                            <div className="card-image">
                                <img src="/profile_show.png" alt="Profile Website" className="card-img"></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h3 className="name">Profile Website</h3>
                            <h3 className="subtitle">Personal Project <br/> Frontend Development</h3>
                            <p className="tools">
                                tools/version control:<br/>
                                <img src="/js_logo.png" alt="JavaScript" className="card__icon"/>
                                <img src="/html5_logo.png" alt="HTML5" className="card__icon"/>
                                <img src="/css3_logo.png" alt="CSS3" className="card__icon"/>
                                <img src="/react_logo.png" alt="React" className="card__icon"/>
                                <img src="/github_logo.png" alt="Github" className="card__icon"/>
                            </p>
                            <button className="card-btn">More Details</button>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="card-wrapper">
                    <SwiperSlide className="card">
                        <div className="image-content">
                            <div className="card-image">
                                <img src="/dungeon_show.png" alt="Dungeon Mania" className="card-img"></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h3 className="name">Dungeon Mania</h3>
                            <h3 className="subtitle">UNSW project <br/> Backend Development | OOP</h3>
                            <p className="tools">
                                tools/version control:<br/>
                                <img src="/java_logo.png" alt="Java" className="card__icon"/>
                                <img src="/gitlab_logo.png" alt="Gitlab" className="card__icon"/>
                            </p>
                            <button className="card-btn">More Details</button>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="card-wrapper">
                    <SwiperSlide className="card">
                        <div className="image-content">
                            <div className="card-image">
                                <img src="/communication_show.png" alt="Communication Team" className="card-img"></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h3 className="name">Communication Team</h3>
                            <h3 className="subtitle">UNSW project <br/> Backend Development</h3>
                            <p className="tools">
                                tools/version control:<br/>
                                <img src="/js_logo.png" alt="JavaScript" className="card__icon"/>
                                <img src="/ts_logo.png" alt="TypeScript" className="card__icon"/>
                                <img src="/gitlab_logo.png" alt="Gitlab" className="card__icon"/>
                            </p>
                            <button className="card-btn">More Details</button>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="card-wrapper">
                    <SwiperSlide className="card">
                        <div className="image-content">
                            <div className="card-image">
                                <img src="/communication_show.png" alt="Communication Team" className="card-img"></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h3 className="name">Communication Team</h3>
                            <h3 className="subtitle">UNSW project <br/> Backend Development</h3>
                            <p className="tools">
                                tools/version control:<br/>
                                <img src="/js_logo.png" alt="JavaScript" className="card__icon"/>
                                <img src="/ts_logo.png" alt="TypeScript" className="card__icon"/>
                                <img src="/gitlab_logo.png" alt="Gitlab" className="card__icon"/>
                            </p>
                            <button className="card-btn">More Details</button>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="card-wrapper">
                    <SwiperSlide className="card">
                        <div className="image-content">
                            <div className="card-image">
                                <img src="/communication_show.png" alt="Communication Team" className="card-img"></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h3 className="name">Communication Team</h3>
                            <h3 className="subtitle">UNSW project <br/> Backend Development</h3>
                            <p className="tools">
                                tools/version control:<br/>
                                <img src="/js_logo.png" alt="JavaScript" className="card__icon"/>
                                <img src="/ts_logo.png" alt="TypeScript" className="card__icon"/>
                                <img src="/gitlab_logo.png" alt="Gitlab" className="card__icon"/>
                            </p>
                            <button className="card-btn">More Details</button>
                        </div>
                    </SwiperSlide>
                </div>
            </div>
        </Swiper>
    );
}

export default Card;