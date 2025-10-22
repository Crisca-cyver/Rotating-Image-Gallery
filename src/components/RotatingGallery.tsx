import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

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
  { src: "https://picsum.photos/id/1015/800/500", alt: "Paisaje montañoso" },
  { src: "https://picsum.photos/id/1025/800/500", alt: "Perro de perfil" },
  { src: "https://picsum.photos/id/1035/800/500", alt: "Bosque neblinoso" },
  { src: "https://picsum.photos/id/1041/800/500", alt: "Costa rocosa" },
  { src: "https://picsum.photos/id/1056/800/500", alt: "Cascada" },
];

export function RotatingGallery({
  images = defaultImages,
  className = "",
  ariaLabel = "Galería de imágenes con rotación",
}: RotatingGalleryProps) {
  return (
    <section
      className={`w-full max-w-6xl mx-auto ${className}`}
      aria-label={ariaLabel}
    >
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        className="my-8"
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[280px] md:!w-[380px] lg:!w-[480px]"
          >
            <figure className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={img.src}
                alt={img.alt ?? `Imagen ${idx + 1}`}
                className="block w-full h-[380px] md:h-[420px] lg:h-[480px] object-cover"
                loading="lazy"
              />
              {img.alt && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm text-sm md:text-base px-3 py-2">
                  {img.alt}
                </figcaption>
              )}
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default RotatingGallery;