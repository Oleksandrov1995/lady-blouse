import './Reviews.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { reviewsData } from '../../data/reviewsData';

export const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h2 className="reviews-title">Відгуки покупців</h2>
      <p className="reviews-text">
        Вдячність, позитивні емоції та фото наших клієнтів з інстаграм сторінки
        та сайту
      </p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviewsData.map(slide => (
          <SwiperSlide key={slide.id}>
            {' '}
            <img
              className="reviews-img"
              src={slide.imageSrc}
              alt="Відгук з інстаграм"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button type="button" className="reviews-button">
        <Link
          to="feadback"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Швидке замовлення
        </Link>
      </button>
    </section>
  );
};
