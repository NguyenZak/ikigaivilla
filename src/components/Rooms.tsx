"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useSearchParams } from "next/navigation";
import CTASection from "./CTASection";

interface RoomZone {
  id: string;
  name: string;
  title: string;
  description: string;
  images: string[];
  beds: string;
  area: string;
  price: string;
  floor: string;
  rooms: string;
  view: string;
  features: string[];
}

export default function Rooms() {
  const searchParams = useSearchParams();
  const [activeZone, setActiveZone] = useState("hoa-hong");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const zone = searchParams.get('zone');
    if (zone) {
      setActiveZone(zone);
    }
  }, [searchParams]);

  const roomZones: RoomZone[] = [
    {
      id: "hoa-hong",
      name: "IKIGAI HOA HỒNG",
      title: "IKIGAI HOA HỒNG",
      description: "1 giường (Double twin) 1 phòng duy nhất (phòng ngủ, wc, bàn trà, sofa tiếp khách....)",
      images: [
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/CONG CHINH 2_3.png",
        "/banner/CONG PHU 4_4.png"
      ],
      beds: "1 giường (Double twin)",
      area: "50m²",
      price: "Liên hệ",
      floor: "4",
      rooms: "1",
      view: "Vườn Nhật",
      features: [
        "Phòng ngủ riêng biệt",
        "WC riêng",
        "Bàn trà",
        "Sofa tiếp khách",
        "View vườn Nhật tuyệt đẹp"
      ]
    },
    {
      id: "hoa-dao",
      name: "IKIGAI HOA ĐÀO (PHÒNG C)",
      title: "IKIGAI HOA ĐÀO (PHÒNG C)",
      description: "Phòng nghỉ ấm cúng với WC chung, phù hợp cho du khách muốn trải nghiệm không gian cộng đồng.",
      images: [
        "/banner/ONSEN 10_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/CONG PHU 4_4.png",
        "/banner/PCTT 2_2.png"
      ],
      beds: "1 giường (Double twin)",
      area: "13m²/phòng",
      price: "Liên hệ",
      floor: "2-3",
      rooms: "2",
      view: "Vườn Nhật",
      features: [
        "WC chung",
        "Bàn trà",
        "Không gian ấm cúng",
        "View vườn Nhật"
      ]
    },
    {
      id: "hoa-mai",
      name: "IKIGAI HOA MAI (PHÒNG A,B)",
      title: "IKIGAI HOA MAI (PHÒNG A,B)",
      description: "Phòng rộng rãi với 2 giường, thiết kế hiện đại, view hướng núi tuyệt đẹp.",
      images: [
        "/banner/CONG CHINH 2_3.png",
        "/banner/ONSEN 10_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/CONG PHU 4_4.png"
      ],
      beds: "2 giường (Double twin)",
      area: "13m² - 17m²",
      price: "Liên hệ",
      floor: "2-3",
      rooms: "6",
      view: "Núi",
      features: [
        "WC chung",
        "Không gian rộng rãi",
        "View núi tuyệt đẹp",
        "Thiết kế hiện đại"
      ]
    },
    {
      id: "huong-duong",
      name: "IKIGAI HƯỚNG DƯƠNG (PHÒNG C)",
      title: "IKIGAI HƯỚNG DƯƠNG (PHÒNG C)",
      description: "Phòng lớn với 3 giường, không gian lý tưởng cho nhóm bạn hoặc gia đình.",
      images: [
        "/banner/CONG PHU 4_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/PCTT 2_2.png"
      ],
      beds: "3 giường (3 twin)",
      area: "22m²",
      price: "Liên hệ",
      floor: "2-3",
      rooms: "2",
      view: "Vườn Nhật",
      features: [
        "WC chung",
        "Không gian rộng rãi",
        "Phù hợp nhóm bạn",
        "View vườn Nhật"
      ]
    },
    {
      id: "hoa-phuong",
      name: "IKIGAI HOA PHƯỢNG (PHÒNG A,D)",
      title: "IKIGAI HOA PHƯỢNG (PHÒNG A,D)",
      description: "Phòng lớn nhất với 4 giường, không gian lý tưởng cho nhóm lớn hoặc sự kiện.",
      images: [
        "/banner/PCTT 2_2.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/CONG CHINH 2_3.png"
      ],
      beds: "4 giường (4 twin)",
      area: "25m² - 49m²",
      price: "Liên hệ",
      floor: "2-3-4",
      rooms: "5",
      view: "Nội khu, sân golf",
      features: [
        "WC chung",
        "Không gian rộng rãi nhất",
        "Phù hợp nhóm lớn",
        "View nội khu và sân golf"
      ]
    }
  ];

  const currentZone = roomZones.find((zone) => zone.id === activeZone);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f2] to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner/ONSEN 10_4.png"
            alt="Rooms Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Các Hạng Phòng
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Khám phá các hạng phòng đẳng cấp tại Ikigai Villa
          </p>
        </div>
      </section>

      {/* Zone Navigation */}
      <section className={`py-8 px-4 bg-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {roomZones.map((zone, index) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeZone === zone.id
                    ? 'bg-gradient-to-r from-[#d11e0f] to-[#b01a0d] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Zone Details - Pinterest Style */}
      {currentZone && (
        <section className={`py-12 px-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Images Section - 3/4 width */}
              <div className="lg:col-span-3">
                <PhotoProvider
                  maskOpacity={0.9}
                  photoClosable={true}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {currentZone.images.map((image, index) => (
                      <PhotoView key={index} src={image}>
                        <div
                          className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                            index === 0 ? 'col-span-2 row-span-2' : ''
                          }`}
                        >
                          <div className={`relative ${index === 0 ? 'h-96' : 'h-48'}`}>
                            <Image
                              src={image}
                              alt={`${currentZone.title} ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {/* Overlay with zoom icon */}
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </div>

              {/* Text Section - 1/4 width */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {currentZone.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {currentZone.description}
                  </p>

                  {/* Room Specifications */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Thông số phòng:
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">Giường:</span>
                        <p className="text-gray-600">{currentZone.beds}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">Diện tích:</span>
                        <p className="text-gray-600">{currentZone.area}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">Tầng:</span>
                        <p className="text-gray-600">{currentZone.floor}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">Số phòng:</span>
                        <p className="text-gray-600">{currentZone.rooms}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg col-span-2">
                        <span className="font-semibold text-gray-700">View:</span>
                        <p className="text-gray-600">{currentZone.view}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg col-span-2">
                        <span className="font-semibold text-gray-700">Giá:</span>
                        <p className="text-gray-600">{currentZone.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Tiện ích:
                    </h3>
                    <ul className="space-y-3">
                      {currentZone.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#d11e0f] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="w-full bg-[#d11e0f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#b01a0d] transition-colors duration-300">
                      Đặt phòng ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
} 