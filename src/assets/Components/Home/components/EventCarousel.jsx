import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample event data
const events = [
  {
    id: 1,
    title: 'Science Fair 2024',
    date: 'December 15, 2024',
    description: 'Join us for the annual science fair showcasing innovative projects by our students.',
    image: 'https://s.wsj.net/public/resources/images/BN-KK463_0922wo_M_20150921175345.jpg',
  },
  {
    id: 2,
    title: 'Sports Day',
    date: 'January 10, 2025',
    description: 'A day full of sports and activities! Come cheer for your favorite team.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHb4OXiTAUJrA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702179121573?e=2147483647&v=beta&t=TqcBE30s3tBrrn58u78iWRKhL9QuIW7FqTwmcwi5ga8',
  },
  {
    id: 3,
    title: 'Cultural Festival',
    date: 'December 25, 2024',
    description: 'Celebrate our diverse culture with music, dance, and art performances.',
    image: 'https://varthana.com/school/wp-content/uploads/2023/01/B135.jpg',
  },
];

const EventCarousel = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Upcoming School Events</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full max-w-4xl mx-auto"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg w-full h-96 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-gray-500">{event.date}</p>
            <p className="text-gray-700 mt-2 text-center">{event.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
