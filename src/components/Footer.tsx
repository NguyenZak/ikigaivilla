import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Social Media & Legal Links */}
          <div className="space-y-6 order-2 md:order-1">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d11e0f] transition-colors">
                <span className="text-sm font-semibold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d11e0f] transition-colors">
                <span className="text-sm font-semibold">X</span>
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d11e0f] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d11e0f] transition-colors">
                <span className="text-sm font-semibold">in</span>
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-600 hover:text-[#d11e0f] transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-[#d11e0f] transition-colors">
                Điều khoản và điều kiện
              </Link>
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="space-y-2 order-3 md:order-2">
            <Link href="/" className="block text-gray-600 hover:text-[#d11e0f] transition-colors">
              Trang chủ
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-[#d11e0f] transition-colors">
              Về chúng tôi
            </Link>
            <Link href="/services" className="block text-gray-600 hover:text-[#d11e0f] transition-colors">
              Dịch vụ
            </Link>
            <Link href="/news" className="block text-gray-600 hover:text-[#d11e0f] transition-colors">
              Tin tức
            </Link>
          </div>

          {/* Right Column - Brand & Description */}
          <div className="space-y-4 order-1 md:order-3">
            <h3 className="text-2xl font-bold text-black">
            <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={300} height={200} />
          </Link>   
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Ikigai Home lấy cảm hứng từ hình ảnh mặt trời đỏ –
biểu tượng của một ngày trọn vẹn. Đó không phải là điểm kết, mà
là thời khắc đẹp nhất để lắng lại, thở sâu, và cảm nhận mình vẫn
đang sống.
Ikigai Home mang trong mình một niềm tin giản dị:
Mỗi người, ở bất kỳ độ tuổi nào, đều xứng đáng được sống theo
cách khiến họ thấy ý nghĩa            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          <p>All Right Reserved | ©Copyright 2025 | Ikigaivilla By Việt Ý - Design by Viz Solutions</p>
        </div>
      </div>
    </footer>
  );
} 