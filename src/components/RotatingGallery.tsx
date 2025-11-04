// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay, // 1. importar
} from "swiper/modules";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ImageItem = {
  src: string;
  alt?: string;
};

type RotatingGalleryProps = {
  images?: ImageItem[];
  className?: string;
  ariaLabel?: string;
};

const defaultImages: ImageItem[] = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop", alt: "Paisaje montañoso" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop", alt: "Perro de perfil" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop", alt: "Bosque neblinoso" },
  { src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=500&fit=crop", alt: "Costa rocosa" },
  { src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=500&fit=crop", alt: "Cascada" },
];

export function RotatingGallery({
  images = defaultImages,
  ariaLabel = "Galería de imágenes con rotación",
}: RotatingGalleryProps) {
  return (
    <section
      className="w-full max-w-5xl mx-auto px-4" // ancho fijo + padding lateral
      aria-label={ariaLabel}
    >
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // 2. añadir Autoplay
        effect="coverflow"
        speed={800}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        grabCursor
        centeredSlides
        loop
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: -25,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        watchSlidesProgress={true}
        className="my-8 w-full" // ocupa 100% del ancho del section
      >
        {images.map((img, idx) => (
          <SwiperSlide className="!w-[300px] md:!w-[380px] lg:!w-[460px]">
            <figure className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={img.src}
                alt={img.alt ?? `Imagen ${idx + 1}`}
                className="block w-full h-[420px] md:h-[480px] lg:h-[540px] object-cover rounded-2xl"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x300/374151/ffffff?text=Image+Not+Found';
                }}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm
                        text-sm md:text-base px-3 py-2 text-slate-100 font-medium">
                  {img.alt}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
export default RotatingGallery;