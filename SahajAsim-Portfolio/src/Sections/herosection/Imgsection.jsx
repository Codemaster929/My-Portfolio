import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';
import '../herosection/Imgsection.css'; // We'll create this file

function Imgsection() {
  const photos = [photo1, photo2, photo3];

  return (
    <div className="photo-swiper-container">
      <Swiper
        effect="cards"
        grabCursor={true}
        cardsEffect={{
          perSlideOffset: 12,
          perSlideRotate: 3,
          rotate: true,
          slideShadows: true,
        }}
        modules={[EffectCards]}
        className="photo-swiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="photo-card">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Imgsection;