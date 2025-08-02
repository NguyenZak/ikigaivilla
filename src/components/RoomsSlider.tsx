"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface RoomItem {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  beds: string;
  area: string;
  price: string;
  floor: string;
  rooms: string;
  view: string;
}

export default function RoomsSlider() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roomsData: RoomItem[] = [
    {
      id: 1,
      name: "IKIGAI HOA HỒNG",
      title: "IKIGAI HOA HỒNG",
      description: "1 giường (Double twin) 1 phòng duy nhất (phòng ngủ, wc, bàn trà, sofa tiếp khách....)",
      image: "/banner/THU VIEN 8_4.png",
      beds: "1 giường (Double twin)",
      area: "50m²",
      price: "Liên hệ",
      floor: "4",
      rooms: "1",
      view: "Vườn Nhật"
    },
    {
      id: 2,
      name: "IKIGAI HOA ĐÀO (PHÒNG C)",
      title: "IKIGAI HOA ĐÀO (PHÒNG C)",
      description: "Phòng nghỉ ấm cúng với WC chung, phù hợp cho du khách muốn trải nghiệm không gian cộng đồng.",
      image: "/banner/ONSEN 10_4.png",
      beds: "1 giường (Double twin)",
      area: "13m²/phòng",
      price: "Liên hệ",
      floor: "2-3",
      rooms: "2",
      view: "Vườn Nhật"
    },
    {
      id: 3,
      name: "IKIGAI HOA MAI (PHÒNG A,B)",
      title: "IKIGAI HOA MAI (PHÒNG A,B)",
      description: "Phòng rộng rãi với 2 giường, thiết kế hiện đại, view hướng núi tuyệt đẹp.",
      image: "/banner/CONG CHINH 2_3.png",
      beds: "2 giường (Double twin)",
      area: "13m² - 17m²",
      price: "Liên hệ",
      floor: "2-3",
      rooms: "6",
      view: "Núi"
    },
    {
      id: 4,
      name: "IKIGAI HƯỚNG DƯƠNG (PHÒNG C)",
      title: "IKIGAI HƯỚNG DƯƠNG (PHÒNG C)",
      description: "Phòng lớn với 3 giường, không gian lý tưởng cho nhóm bạn hoặc gia đình.",
      image: "/banner/CONG PHU 4_4.png",
      beds: "3 giường (3 twin)",
      area: "22m²",
      price: "Liên hệ",
      floor: "2-3",
      rooms: "2",
      view: "Vườn Nhật"
    },
    {
      id: 5,
      name: "IKIGAI HOA PHƯỢNG (PHÒNG A,D)",
      title: "IKIGAI HOA PHƯỢNG (PHÒNG A,D)",
      description: "Phòng lớn nhất với 4 giường, không gian lý tưởng cho nhóm lớn hoặc sự kiện.",
      image: "/banner/PCTT 2_2.png",
      beds: "4 giường (4 twin)",
      area: "25m² - 49m²",
      price: "Liên hệ",
      floor: "2-3-4",
      rooms: "5",
      view: "Nội khu, sân golf"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 4 >= roomsData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, roomsData.length - 4) : prevIndex - 1
    );
  };

  const getVisibleRooms = () => {
    const visibleRooms = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % roomsData.length;
      visibleRooms.push(roomsData[index]);
    }
    return visibleRooms;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f8f7f2] to-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Khám Phá Các Hạng Phòng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trải nghiệm các hạng phòng đẳng cấp với thiết kế độc đáo và tiện ích hiện đại
          </p>
        </div>

        {/* Rooms Slider */}
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

          {/* Rooms Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
            {getVisibleRooms().map((room, index) => (
              <article 
                key={room.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d11e0f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {room.beds}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {room.description}
                  </p>
                  
                  {/* Room Specifications */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                      <span className="font-semibold text-gray-700">Diện tích:</span>
                      <p className="text-gray-600">{room.area}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Tầng:</span>
                      <p className="text-gray-600">{room.floor}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Số phòng:</span>
                      <p className="text-gray-600">{room.rooms}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">View:</span>
                      <p className="text-gray-600">{room.view}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{room.price}</span>
                    <button 
                      onClick={() => router.push('/rooms')}
                      className="text-[#d11e0f] font-semibold hover:underline text-sm"
                    >
                      Xem chi tiết →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => router.push('/rooms')}
            className="bg-[#d11e0f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b01a0d] transition-colors duration-300 hover:scale-105"
          >
            Xem tất cả phòng
          </button>
        </div>
      </div>
    </section>
  );
} 