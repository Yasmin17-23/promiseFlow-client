import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from "../../assets/banner/banner-img-1.jpg";
import img2 from "../../assets/banner/banner-img-2.jpg";
import img3 from "../../assets/banner/banner-img-3.jpeg";
import Slider from '../Slider/Slider';


const banner = () => {
  return (
    <div className='container py-8 px-5'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider
            image={img1}
            text='Get More Food Donation'>
          </Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={img2}
            text='Please Hepl Our Charities'>
          </Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={img3}
            text='Get More Help For Donation'>
          </Slider>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default banner;