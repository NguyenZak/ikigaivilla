import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f2] py-16">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Bảng Giá</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các gói dịch vụ và mức giá phù hợp với nhu cầu của bạn
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col h-full p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ikigai Bán Trú Theo Ngày</h3>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Phòng tiêu chuẩn
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                WiFi miễn phí
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dọn phòng hàng ngày
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bữa sáng cơ bản
              </li>
            </ul>
            <div className="mt-auto">
              <Link 
                href="/pricing/ban-tru"
                className="w-full bg-[#d11e0f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#b01a0d] transition-colors inline-block text-center"
              >
                Chọn Gói
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-[#d11e0f] relative flex flex-col h-full p-8">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#d11e0f] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Seller
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ikigai Nội Trú</h3>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Phòng cao cấp
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                WiFi tốc độ cao
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dọn phòng 2 lần/ngày
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bữa sáng buffet
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dịch vụ spa
              </li>
            </ul>
            <div className="mt-auto">
              <Link 
                href="/pricing/noi-tru"
                className="w-full bg-[#d11e0f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#b01a0d] transition-colors inline-block text-center"
              >
                Chọn Gói
              </Link>
            </div>
          </div>

          {/* Luxury Plan */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col h-full p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ikigai Trải Nghiệm</h3>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Suite sang trọng
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                WiFi không giới hạn
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dịch vụ 24/7
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bữa ăn đa dạng
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Spa & Gym miễn phí
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dịch vụ đưa đón
              </li>
            </ul>
            <div className="mt-auto">
              <Link 
                href="/pricing/trai-nghiem"
                className="w-full bg-[#d11e0f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#b01a0d] transition-colors inline-block text-center"
              >
                Chọn Gói
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thông Tin Bổ Sung</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Chính Sách Hủy</h3>
              <p className="text-gray-600">
                Hủy phòng miễn phí trước 24h. Sau đó sẽ tính phí 50% giá phòng.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Thanh Toán</h3>
              <p className="text-gray-600">
                Chấp nhận thanh toán bằng tiền mặt, thẻ tín dụng hoặc chuyển khoản ngân hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 