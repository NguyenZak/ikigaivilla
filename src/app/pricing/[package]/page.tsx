"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

interface PackageDetails {
  id: string;
  name: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  images: string[];
  highlights: string[];
  terms: string[];
}

export default function PackageDetailPage() {
  const params = useParams();
  const packageId = params.package as string;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Package data
  const packages: Record<string, PackageDetails> = {
    "ban-tru": {
      id: "ban-tru",
      name: "Ikigai Bán Trú Theo Ngày",
      title: "Gói Bán Trú Theo Ngày",
      price: "500K",
      period: "/ngày",
      description: "Trải nghiệm nghỉ dưỡng linh hoạt với gói bán trú theo ngày, phù hợp cho những chuyến đi ngắn hạn hoặc công tác.",
      features: [
        "Phòng tiêu chuẩn với view đẹp",
        "WiFi tốc độ cao miễn phí",
        "Dọn phòng hàng ngày",
        "Bữa sáng buffet đa dạng",
        "Sử dụng tiện ích chung",
        "Bảo vệ 24/7",
        "Bãi đỗ xe miễn phí",
        "Hỗ trợ đặt tour du lịch"
      ],
      images: [
        "/banner/ONSEN 10_4.png",
        "/banner/THU VIEN 8_4.png",
        "/banner/CONG CHINH 2_3.png"
      ],
      highlights: [
        "Check-in linh hoạt từ 14:00",
        "Check-out trước 12:00",
        "Hủy phòng miễn phí trước 24h",
        "Thanh toán tại chỗ hoặc online"
      ],
      terms: [
        "Áp dụng cho khách lẻ và đoàn",
        "Giá chưa bao gồm thuế VAT",
        "Có thể thay đổi theo mùa",
        "Liên hệ để được tư vấn chi tiết"
      ]
    },
    "noi-tru": {
      id: "noi-tru",
      name: "Ikigai Nội Trú",
      title: "Gói Nội Trú Cao Cấp",
      price: "800K",
      period: "/ngày",
      description: "Gói nội trú cao cấp với đầy đủ tiện nghi, dịch vụ chăm sóc toàn diện cho kỳ nghỉ dưỡng hoàn hảo.",
      features: [
        "Phòng cao cấp với view tuyệt đẹp",
        "WiFi tốc độ cao không giới hạn",
        "Dọn phòng 2 lần/ngày",
        "Bữa sáng buffet sang trọng",
        "Dịch vụ spa cơ bản",
        "Sử dụng gym và hồ bơi",
        "Dịch vụ đưa đón sân bay",
        "Hỗ trợ đặt nhà hàng, tour"
      ],
      images: [
        "/banner/THU VIEN 8_4.png",
        "/banner/ONSEN 10_4.png",
        "/banner/CONG PHU 4_4.png"
      ],
      highlights: [
        "Check-in từ 14:00, check-out trước 12:00",
        "Hủy phòng miễn phí trước 48h",
        "Bao gồm 1 bữa ăn chính/ngày",
        "Dịch vụ concierge 24/7"
      ],
      terms: [
        "Áp dụng cho khách lẻ và đoàn",
        "Giá đã bao gồm thuế VAT",
        "Có thể thay đổi theo mùa",
        "Đặt phòng tối thiểu 2 ngày"
      ]
    },
    "trai-nghiem": {
      id: "trai-nghiem",
      name: "Ikigai Trải Nghiệm",
      title: "Gói Trải Nghiệm Đặc Biệt",
      price: "1.2M",
      period: "/tháng",
      description: "Gói trải nghiệm đặc biệt dành cho những ai muốn sống và làm việc tại Ikigai Villa trong thời gian dài.",
      features: [
        "Suite sang trọng với không gian riêng",
        "WiFi không giới hạn tốc độ cao",
        "Dịch vụ 24/7 với butler riêng",
        "Bữa ăn đa dạng 3 bữa/ngày",
        "Spa & Gym miễn phí không giới hạn",
        "Dịch vụ đưa đón sân bay",
        "Không gian làm việc riêng",
        "Tham gia các hoạt động cộng đồng"
      ],
      images: [
        "/banner/CONG CHINH 2_3.png",
        "/banner/ONSEN 10_4.png",
        "/banner/THU VIEN 8_4.png"
      ],
      highlights: [
        "Thời gian linh hoạt từ 1-12 tháng",
        "Giảm giá 20% cho đặt từ 3 tháng",
        "Bao gồm tất cả tiện ích",
        "Hỗ trợ setup workspace"
      ],
      terms: [
        "Áp dụng cho khách dài hạn",
        "Giá đã bao gồm tất cả dịch vụ",
        "Có thể thay đổi theo mùa",
        "Liên hệ để được tư vấn chi tiết"
      ]
    }
  };

  const packageData = packages[packageId];

  if (!packageData) {
    return (
      <div className="min-h-screen bg-[#f8f7f2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Gói không tồn tại</h1>
          <Link 
            href="/pricing"
            className="bg-[#d11e0f] text-white px-6 py-3 rounded-lg hover:bg-[#b01a0d] transition-colors"
          >
            Quay lại bảng giá
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#f8f7f2]">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link 
                href="/pricing"
                className="flex items-center text-gray-600 hover:text-[#d11e0f] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Quay lại bảng giá
              </Link>
              <h1 className="text-2xl font-bold text-gray-800">{packageData.title}</h1>
              <div className="w-20"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Package Header */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{packageData.name}</h2>
                    <p className="text-lg text-gray-600">{packageData.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#d11e0f]">
                      {packageData.price}
                    </div>
                    <div className="text-gray-600">{packageData.period}</div>
                  </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {packageData.images.map((image, index) => (
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${packageData.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Tính năng bao gồm:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {packageData.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Điểm nổi bật:</h3>
                <div className="space-y-3">
                  {packageData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#d11e0f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Điều khoản:</h3>
                <div className="space-y-3">
                  {packageData.terms.map((term, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{term}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Đặt gói này</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d11e0f] mb-2">
                      {packageData.price}
                    </div>
                    <div className="text-gray-600 mb-4">{packageData.period}</div>
                  </div>
                  
                  <button className="w-full bg-[#d11e0f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#b01a0d] transition-colors mb-4">
                    Đặt ngay
                  </button>
                  
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full border-2 border-[#d11e0f] text-[#d11e0f] py-3 px-6 rounded-lg font-semibold hover:bg-[#d11e0f] hover:text-white transition-colors"
                  >
                    Liên hệ tư vấn
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Liên hệ:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>📞 0123 456 789</div>
                    <div>📧 info@ikigaivilla.com</div>
                    <div>📍 Đà Nẵng, Việt Nam</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
} 