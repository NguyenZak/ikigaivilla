"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export default function NewsSlider() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "Ikigai Villa - Nơi nghỉ dưỡng lý tưởng cho mùa hè 2024",
      excerpt: "Khám phá những tiện ích độc đáo và dịch vụ đẳng cấp tại Ikigai Villa, nơi mang đến trải nghiệm nghỉ dưỡng hoàn hảo cho gia đình bạn.",
      image: "/banner/ONSEN 10_4.png",
      category: "Tin tức",
      date: "15/12/2024",
      readTime: "5 phút"
    },
    {
      id: 2,
      title: "Khám phá ẩm thực độc đáo tại Nhà hàng Ikigai",
      excerpt: "Trải nghiệm hương vị ẩm thực Nhật Bản truyền thống kết hợp với ẩm thực Việt Nam hiện đại.",
      image: "/banner/CONG CHINH 2_3.png",
      category: "Ẩm thực",
      date: "12/12/2024",
      readTime: "3 phút"
    },
    {
      id: 3,
      title: "Spa Onsen - Liệu pháp thư giãn đẳng cấp Nhật Bản",
      excerpt: "Trải nghiệm liệu pháp onsen truyền thống Nhật Bản ngay tại Ikigai Villa.",
      image: "/banner/THU VIEN 8_4.png",
      category: "Spa & Wellness",
      date: "10/12/2024",
      readTime: "4 phút"
    },
    {
      id: 4,
      title: "Sự kiện đặc biệt: Đêm nhạc Jazz tại Ikigai Villa",
      excerpt: "Thưởng thức những giai điệu jazz tuyệt vời trong không gian sang trọng của Ikigai Villa.",
      image: "/banner/CONG PHU 4_4.png",
      category: "Sự kiện",
      date: "08/12/2024",
      readTime: "2 phút"
    },
    {
      id: 5,
      title: "Gói nghỉ dưỡng gia đình - Ưu đãi đặc biệt mùa hè",
      excerpt: "Khám phá gói nghỉ dưỡng gia đình với nhiều ưu đãi hấp dẫn cho mùa hè 2024.",
      image: "/banner/PCTT 2_2.png",
      category: "Khuyến mãi",
      date: "05/12/2024",
      readTime: "3 phút"
    },
    {
      id: 6,
      title: "Thiết kế nội thất độc đáo tại Ikigai Villa",
      excerpt: "Khám phá những điểm nhấn thiết kế nội thất độc đáo tại Ikigai Villa.",
      image: "/banner/ONSEN 10_4.png",
      category: "Thiết kế",
      date: "03/12/2024",
      readTime: "6 phút"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 4 >= newsData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, newsData.length - 4) : prevIndex - 1
    );
  };

  const getVisibleNews = () => {
    const visibleNews = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % newsData.length;
      visibleNews.push(newsData[index]);
    }
    return visibleNews;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f7f2]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tin Tức & Sự Kiện
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cập nhật những tin tức mới nhất về Ikigai Villa và các sự kiện đặc biệt
          </p>
        </div>

        {/* News Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
            {getVisibleNews().map((news, index) => (
              <article 
                key={news.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d11e0f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{news.date}</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {news.excerpt}
                  </p>
                  <button 
                    onClick={() => router.push(`/news/${news.id}`)}
                    className="text-[#d11e0f] font-semibold hover:underline text-sm"
                  >
                    Đọc thêm →
                  </button>
                </div>
              </article>
            ))}
          </div>


        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#d11e0f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b01a0d] transition-colors duration-300 hover:scale-105"
          >
            Xem tất cả tin tức
          </button>
        </div>
      </div>
    </section>
  );
} 