"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface ServiceZone {
  id: string;
  name: string;
  title: string;
  description: string;
  images: string[];
  features: string[];
}

interface RoomZone {
  name: string;
  description: string;
  images: string[];
}

export default function Services() {
  const [activeZone, setActiveZone] = useState("onsen");

  // 4 tiện ích chính
  const serviceZones: ServiceZone[] = [
    {
      id: "onsen",
      name: "Khu onsen ngoài trời",
      title: "Khu Onsen Ngoài Trời",
      description:
        "Trải nghiệm tắm khoáng nóng ngoài trời chuẩn Nhật Bản, thư giãn giữa thiên nhiên, giúp phục hồi năng lượng và cân bằng cơ thể.",
      images: [
        "/banner/ONSEN 10_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/CONG CHINH 2_3.png",
        "/banner/CONG PHU 4_4.png"
      ],
      features: [
        "Nước khoáng nóng tự nhiên",
        "Không gian ngoài trời xanh mát",
        "Bồn tắm khoáng, phòng xông hơi",
        "Dịch vụ spa thư giãn"
      ]
    },
    {
      id: "lobby-library",
      name: "Sảnh lễ tân & Thư viện",
      title: "Sảnh Lễ Tân & Thư Viện",
      description:
        "Không gian đón tiếp sang trọng, kết hợp thư viện yên tĩnh với hàng ngàn đầu sách, lý tưởng cho việc đọc sách, làm việc và thư giãn.",
      images: [
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/CONG CHINH 2_3.png",
        "/banner/CONG PHU 4_4.png"
      ],
      features: [
        "Sảnh lễ tân sang trọng",
        "Thư viện với hơn 10,000 đầu sách",
        "Không gian làm việc chung",
        "Cà phê và trà miễn phí"
      ]
    },
    {
      id: "restaurant",
      name: "Khu vực nhà hàng",
      title: "Khu Vực Nhà Hàng",
      description:
        "Nhà hàng phục vụ ẩm thực đa dạng, không gian ấm cúng, thực đơn phong phú từ món Việt đến món Âu, nguyên liệu tươi ngon mỗi ngày.",
      images: [
        "/banner/CONG CHINH 2_3.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/CONG PHU 4_4.png"
      ],
      features: [
        "Ẩm thực Việt & Quốc tế",
        "Không gian riêng tư & chung",
        "Nguyên liệu hữu cơ, tươi mới",
        "Phục vụ chuyên nghiệp"
      ]
    },
    {
      id: "wellness",
      name: "Khu vực chăm sóc sức khoẻ & vật lý trị liệu",
      title: "Chăm Sóc Sức Khoẻ & Vật Lý Trị Liệu",
      description:
        "Dịch vụ chăm sóc sức khoẻ toàn diện: massage, vật lý trị liệu, yoga, thiền, giúp phục hồi thể chất và tinh thần.",
      images: [
        "/banner/CONG PHU 4_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/CONG CHINH 2_3.png"
      ],
      features: [
        "Massage trị liệu chuyên sâu",
        "Phòng tập yoga & thiền",
        "Chuyên gia vật lý trị liệu",
        "Không gian yên tĩnh, riêng tư"
      ]
    }
  ];

  // Các phân khu hạng phòng
  const roomZones: RoomZone[] = [
    {
      name: "IKIGAI HOA HỒNG",
      description: "Phòng nghỉ cao cấp, thiết kế tinh tế, view vườn hoa hồng tuyệt đẹp.",
      images: [
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/CONG CHINH 2_3.png"
      ]
    },
    {
      name: "IKIGAI HOA ĐÀO (PHÒNG C)",
      description: "Không gian ấm cúng, ban công hướng vườn hoa đào, phù hợp nghỉ dưỡng gia đình.",
      images: [
        "/banner/ONSEN 10_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/CONG PHU 4_4.png"
      ]
    },
    {
      name: "IKIGAI HOA MAI (PHÒNG A,B)",
      description: "Phòng rộng rãi, thiết kế hiện đại, view hướng hồ và vườn mai.",
      images: [
        "/banner/CONG CHINH 2_3.png",
        "/banner/ONSEN 10_4.png",
        "/banner/THU VIEN 8_4.png"
      ]
    },
    {
      name: "IKIGAI HƯỚNG DƯƠNG (PHÒNG C)",
      description: "Phòng nhiều ánh sáng, ban công hướng vườn hướng dương, nội thất sang trọng.",
      images: [
        "/banner/CONG PHU 4_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png"
      ]
    },
    {
      name: "IKIGAI HOA PHƯỢNG (PHÒNG A,D)",
      description: "Phòng nghỉ độc đáo, view vườn hoa phượng, không gian riêng tư.",
      images: [
        "/banner/PCTT 2_2.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png"
      ]
    }
  ];

  const currentZone = serviceZones.find((zone) => zone.id === activeZone);

  return (
    <PhotoProvider
      maskOpacity={0.9}
      photoClosable={true}
    >
      <div className="min-h-screen bg-gradient-to-b from-[#f8f7f2] to-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/banner/ONSEN 10_4.png"
              alt="Services Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Tiện ích đặc quyền</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Khám phá các tiện ích và phân khu phòng nghỉ đẳng cấp tại Ikigai Villa
            </p>
          </div>
        </section>

        {/* Zone Navigation */}
        <section className="py-8 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {serviceZones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeZone === zone.id
                      ? 'bg-gradient-to-r from-[#d11e0f] to-[#b01a0d] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {zone.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Zone Details - Pinterest Style */}
        {currentZone && (
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Images Section - 3/4 width */}
                <div className="lg:col-span-3">
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
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Đặc điểm nổi bật:
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Room Zones Section - Pinterest Style */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Phân khu các hạng phòng
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mỗi hạng phòng tại Ikigai Villa đều mang một dấu ấn riêng biệt, thiết kế hài hòa với thiên nhiên và tiện nghi hiện đại.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {roomZones.map((room, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-1 p-1">
                    {room.images.map((image, imageIdx) => (
                      <PhotoView key={imageIdx} src={image}>
                        <div
                          className={`relative overflow-hidden cursor-pointer ${
                            imageIdx === 0 ? 'col-span-2 h-48' : 'h-24'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${room.name} ${imageIdx + 1}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                          {/* Overlay with zoom icon */}
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </PhotoView>
                    ))}
                  </div>

                  {/* Room Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{room.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{room.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {room.images.length} ảnh
                      </span>
                      <div className="w-2 h-2 bg-[#d11e0f] rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sẵn sàng trải nghiệm?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi để được tư vấn chi tiết về các tiện ích và dịch vụ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#d11e0f] to-[#b01a0d] hover:from-[#b01a0d] hover:to-[#8f150a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Liên hệ tư vấn
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Xem bảng giá
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PhotoProvider>
  );
}
