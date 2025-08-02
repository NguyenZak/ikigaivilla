"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import ContactModal from './ContactModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  overlay: string;
  statistics: {
    value: string;
    label: string;
  }[];
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Keyboard]}
          loop={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          speed={1000}
          className="h-full"
          onSlideChange={handleSlideChange}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Background Media */}
              <div className="absolute inset-0">
                {slide.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}></div>

              {/* Content - Positioned at bottom left */}
              <div className="relative z-10 h-full flex items-end">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full pb-16 md:pb-16">
                  <div className="max-w-2xl">
                    {/* Main Heading */}
                    <h1 className={`text-2xl sm:text-xl md:text-xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight text-white transition-all duration-1000 ease-out transform ${
                      isAnimating ? 'scale-105' : 'scale-100'
                    }`}>
                      {slide.title}
                    </h1>
                    
                    {/* Descriptive Paragraph */}
                    <p className={`text-sm sm:text-base md:text-xl lg:text-xl mb-4 md:mb-8 text-gray-200 leading-relaxed transition-all duration-1000 ease-out delay-300 transform ${
                      isAnimating ? 'scale-105' : 'scale-100'
                    }`}>
                      {slide.subtitle}
                    </p>

                    {/* Call to Action Buttons */}
                    <div className={`flex flex-row gap-2 md:gap-4 mb-6 md:mb-12 transition-all duration-1000 ease-out delay-600 transform ${
                      isAnimating ? 'scale-105' : 'scale-100'
                    }`}>
                      <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-gradient-to-r from-[#d11e0f] to-[#b01a0d] hover:from-[#b01a0d] hover:to-[#8f150a] text-white px-3 md:px-8 py-2 md:py-4 rounded-lg font-semibold text-xs md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex-1"
                      >
                        Đặt lịch tư vấn
                      </button>
                      <Link
                        href="/about"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-3 md:px-8 py-2 md:py-4 rounded-lg font-semibold text-xs md:text-lg transition-all duration-300 transform hover:scale-105 flex-1"
                      >
                        Tìm hiểu thêm
                      </Link>
                    </div>

                    {/* Statistics Section */}
                    <div className={`flex flex-row gap-2 md:gap-8 transition-all duration-1000 ease-out delay-900 transform ${
                      isAnimating ? 'scale-105' : 'scale-100'
                    }`}>
                      {(slide.statistics || []).map((stat, statIndex) => (
                        <div key={statIndex} className="text-center flex-1">
                          <div className="text-lg md:text-4xl font-bold mb-1 md:mb-2 text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs md:text-sm text-gray-300">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group z-50 border-2 border-white shadow-lg min-w-[56px] min-h-[56px] flex items-center justify-center">
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group z-50 border-2 border-white shadow-lg min-w-[56px] min-h-[56px] flex items-center justify-center">
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"></div>

        {/* Swipe indicator for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 md:hidden z-20">
          <div className="text-white/30 text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
            Vuốt để chuyển slide
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
} 