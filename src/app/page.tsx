"use client";
import HeroSlider from "../components/HeroSlider";
import LetterCard from "../components/LetterCard";
import WhyChooseUs from "../components/WhyChooseUs";
import OurTeam from "../components/OurTeam";

export default function Home() {
  const slides = [
    {
      type: "image" as const,
      src: "/banner/ONSEN 10_4.png",
      alt: "Ikigaivilla Onsen",
      title: "Chào mừng đến với Ikigaivilla",
      subtitle: "Trải nghiệm nghỉ dưỡng sang trọng với dịch vụ đẳng cấp 5 sao",
      overlay: "from-black/50 to-black/50"
    },
    {
      type: "image" as const,
      src: "/banner/THU VIEN 8_4.png",
      alt: "Ikigaivilla Thư Viện",
      title: "Không gian thư viện yên tĩnh",
      subtitle: "Nơi lý tưởng để thư giãn và làm việc",
      overlay: "from-black/50 to-black/50"
    },
    {
      type: "image" as const,
      src: "/banner/CONG CHINH 2_3.png",
      alt: "Ikigaivilla Cổng Chính",
      title: "Cổng chính Ikigaivilla",
      subtitle: "Kiến trúc độc đáo, ấn tượng ngay từ cái nhìn đầu tiên",
      overlay: "from-black/50 to-black/50"
    },
    {
      type: "image" as const,
      src: "/banner/CONG PHU 4_4.png",
      alt: "Ikigaivilla Cổng Phụ",
      title: "Cổng phụ tiện lợi",
      subtitle: "Thuận tiện di chuyển, an toàn tuyệt đối",
      overlay: "from-black/50 to-black/50"
    },
    {
      type: "image" as const,
      src: "/banner/PCTT 2_2.png",
      alt: "Ikigaivilla PCTT",
      title: "Phòng chức năng đa dạng",
      subtitle: "Đáp ứng mọi nhu cầu của khách hàng",
      overlay: "from-black/50 to-black/50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f2]">
      {/* Hero Banner Slider */}
      <HeroSlider slides={slides} />

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#d11e0f] mb-2">50+</div>
              <div className="text-gray-600">Phòng Nghỉ</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d11e0f] mb-2">1000+</div>
              <div className="text-gray-600">Khách Hài Lòng</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d11e0f] mb-2">5★</div>
              <div className="text-gray-600">Đánh Giá Trung Bình</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d11e0f] mb-2">24/7</div>
              <div className="text-gray-600">Hỗ Trợ Khách Hàng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Thư ngỏ Section */}
      <LetterCard />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Team */}
      <OurTeam />

      
    </div>
  );
}
