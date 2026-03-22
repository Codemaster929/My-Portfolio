import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import photo1 from '../../assets/images/photo1.jpg'
import photo2 from '../../assets/images/photo2.jpg'
import photo3 from '../../assets/images/photo3.jpg'

function Imgsection() {
  const photos = [photo1,photo2,photo3];

  return (
    <div>
 <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 10,        // Rotation angle
        stretch: 0,
        depth: 140,        // Distance between slides
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      pagination={{ clickable: true }}
      className="w-full max-w-lg h-80"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index} className="w-50">
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-70 h-80 m-auto object-cover rounded-2xl border-2 border-gray-800 shadow-gray-400-md "
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
   
  );
}

export default Imgsection;