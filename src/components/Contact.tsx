"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo: ContactInfo[] = [
    {
      icon: "📍",
      title: "Địa chỉ",
      value: "123 Đường ABC, Quận 1, TP.HCM, Việt Nam"
    },
    {
      icon: "📞",
      title: "Điện thoại",
      value: "+84 28 1234 5678",
      link: "tel:+842812345678"
    },
    {
      icon: "📧",
      title: "Email",
      value: "info@ikigaivilla.com",
      link: "mailto:info@ikigaivilla.com"
    },
    {
      icon: "🕒",
      title: "Giờ làm việc",
      value: "24/7 - Hỗ trợ khách hàng"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f2] to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner/CONG PHU 4_4.png"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Liên Hệ
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-600 hover:text-[#d11e0f] transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Gửi tin nhắn cho chúng tôi</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Cảm ơn bạn! Tin nhắn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent"
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Chủ đề *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="Đặt phòng">Đặt phòng</option>
                      <option value="Tư vấn dịch vụ">Tư vấn dịch vụ</option>
                      <option value="Sự kiện">Sự kiện</option>
                      <option value="Hợp tác">Hợp tác</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent resize-none"
                    placeholder="Nhập nội dung tin nhắn..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d11e0f] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-[#b01a0d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className={`bg-white rounded-2xl p-6 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Vị trí của chúng tôi</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Bản đồ sẽ được tích hợp tại đây</p>
                    <p className="text-sm mt-2">123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className={`bg-white rounded-2xl p-6 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Câu hỏi thường gặp</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Làm thế nào để đặt phòng?</h4>
                    <p className="text-gray-600 text-sm">Bạn có thể đặt phòng qua website, điện thoại hoặc email. Chúng tôi sẽ xác nhận trong vòng 24 giờ.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Có dịch vụ đưa đón không?</h4>
                    <p className="text-gray-600 text-sm">Có, chúng tôi cung cấp dịch vụ đưa đón từ sân bay với phụ phí. Vui lòng đặt trước 24 giờ.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Thời gian check-in/check-out?</h4>
                    <p className="text-gray-600 text-sm">Check-in: 14:00, Check-out: 12:00. Có thể sắp xếp sớm/late check-out theo yêu cầu.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="py-16 px-4 bg-[#d11e0f]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kết nối với chúng tôi
          </h2>
          <p className="text-xl mb-8">
            Theo dõi chúng tôi trên mạng xã hội để cập nhật tin tức mới nhất
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors">
              <span className="text-2xl">📘</span>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors">
              <span className="text-2xl">📷</span>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors">
              <span className="text-2xl">🐦</span>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors">
              <span className="text-2xl">📺</span>
            </a>
          </div>

          <div className="border-t border-white/20 pt-8">
            <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin tức</h3>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-[#d11e0f] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 