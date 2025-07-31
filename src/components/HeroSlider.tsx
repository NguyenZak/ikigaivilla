"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      className="relative h-screen overflow-hidden"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
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
                  <h1 className="text-2xl sm:text-xl md:text-xl lg:text-5xl font-bold mb-3 md:mb-6 leading-tight text-white">
                    {slide.title}
                  </h1>
                  
                  {/* Descriptive Paragraph */}
                  <p className="text-sm sm:text-base md:text-xl lg:text-xl mb-4 md:mb-8 text-gray-200 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-row gap-2 md:gap-4 mb-6 md:mb-12">
                    <Link
                      href="/services"
                      className="bg-gradient-to-r from-[#d11e0f] to-[#b01a0d] hover:from-[#b01a0d] hover:to-[#8f150a] text-white px-3 md:px-8 py-2 md:py-4 rounded-lg font-semibold text-xs md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex-1"
                    >
                      Đặt lịch tư vấn
                    </Link>
                    <Link
                      href="/about"
                      className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white px-3 md:px-8 py-2 md:py-4 rounded-lg font-semibold text-xs md:text-lg transition-all duration-300 transform hover:scale-105 flex-1"
                    >
                      Tìm hiểu thêm
                    </Link>
                  </div>

                  {/* Statistics Section */}
                  <div className="flex flex-row gap-2 md:gap-8">
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
          </div>
        ))}
      </div>

      {/* Navigation Arrows with enhanced animations */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-1000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Swipe indicator for mobile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 md:hidden">
        <div className="text-white/30 text-sm bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
          Vuốt để chuyển slide
        </div>
      </div>
    </section>
  );
} 