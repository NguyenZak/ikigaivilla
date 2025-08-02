"use client";
import HeroSlider from "../components/HeroSlider";
import LetterCard from "../components/LetterCard";
import WhyChooseUs from "../components/WhyChooseUs";
import OurTeam from "../components/OurTeam";
import NewsSlider from "../components/NewsSlider";
import RoomsSlider from "../components/RoomsSlider";
import ServicesSlider from "../components/ServicesSlider";
import CTASection from "../components/CTASection";
import Link from "next/link";

export default function Home() {
  const slides = [
    {
      type: "image" as const,
      src: "/banner/ONSEN 10_4.png",
      alt: "Ikigaivilla Onsen",
      title: "Chào mừng đến với Ikigaivilla",
      subtitle: "Trải nghiệm nghỉ dưỡng sang trọng với dịch vụ đẳng cấp 5 sao",
      overlay: "from-black/30 to-black/30",
      statistics: [
        { value: "50+", label: "Phòng Nghỉ" },
        { value: "1000+", label: "Khách Hài Lòng" },
        { value: "5★", label: "Đánh Giá Trung Bình" }
      ]
    },
    {
      type: "image" as const,
      src: "/banner/THU VIEN 8_4.png",
      alt: "Ikigaivilla Thư Viện",
      title: "Không gian thư viện yên tĩnh",
      subtitle: "Nơi lý tưởng để thư giãn và làm việc",
      overlay: "from-black/30 to-black/30",
      statistics: [
        { value: "24/7", label: "Hỗ Trợ Khách Hàng" },
        { value: "100%", label: "An Toàn Tuyệt Đối" },
        { value: "4.9★", label: "Đánh Giá Dịch Vụ" }
      ]
    },
    {
      type: "image" as const,
      src: "/banner/CONG CHINH 2_3.png",
      alt: "Ikigaivilla Cổng Chính",
      title: "Cổng chính Ikigaivilla",
      subtitle: "Kiến trúc độc đáo, ấn tượng ngay từ cái nhìn đầu tiên",
      overlay: "from-black/30 to-black/30",
      statistics: [
        { value: "2020", label: "Năm Thành Lập" },
        { value: "100+", label: "Nhân Viên Chuyên Nghiệp" },
        { value: "99%", label: "Khách Hàng Quay Lại" }
      ]
    },
    {
      type: "image" as const,
      src: "/banner/CONG PHU 4_4.png",
      alt: "Ikigaivilla Cổng Phụ",
      title: "Cổng phụ tiện lợi",
      subtitle: "Thuận tiện di chuyển, an toàn tuyệt đối",
      overlay: "from-black/30 to-black/30",
      statistics: [
        { value: "3", label: "Cổng Ra Vào" },
        { value: "24h", label: "Bảo Vệ" },
        { value: "100%", label: "An Toàn" }
      ]
    },
    {
      type: "image" as const,
      src: "/banner/PCTT 2_2.png",
      alt: "Ikigaivilla PCTT",
      title: "Phòng chức năng đa dạng",
      subtitle: "Đáp ứng mọi nhu cầu của khách hàng",
      overlay: "from-black/30 to-black/30",
      statistics: [
        { value: "10+", label: "Loại Phòng Chức Năng" },
        { value: "200+", label: "Tiện Ích Đặc Biệt" },
        { value: "4.8★", label: "Đánh Giá Tiện Ích" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f2]">
      {/* Hero Banner Slider */}
      <HeroSlider slides={slides} />

      {/* Thư ngỏ Section */}
      <LetterCard />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services Slider */}
      <ServicesSlider />

      {/* Our Team */}
      <OurTeam />

      {/* News Slider */}
      <NewsSlider />

      {/* Rooms Slider */}
      <RoomsSlider />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
