import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faInfoCircle, faCog, faNewspaper, faShieldAlt, faFileContract } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d11e0f] transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d11e0f] transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d11e0f] transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-600 hover:text-[#d11e0f] transition-colors flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="w-4 h-4 mr-2" />
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-[#d11e0f] transition-colors flex items-center">
                <FontAwesomeIcon icon={faFileContract} className="w-4 h-4 mr-2" />
                Điều khoản và điều kiện
              </Link>
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="space-y-2 order-3 md:order-2">
            <Link href="/" className="block text-gray-600 hover:text-[#d11e0f] transition-colors flex items-center">
              <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-2" />
              Trang chủ
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-[#d11e0f] transition-colors flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4 mr-2" />
              Về chúng tôi
            </Link>
            <Link href="/services" className="block text-gray-600 hover:text-[#d11e0f] transition-colors flex items-center">
              <FontAwesomeIcon icon={faCog} className="w-4 h-4 mr-2" />
              Dịch vụ
            </Link>
            <Link href="/news" className="block text-gray-600 hover:text-[#d11e0f] transition-colors flex items-center">
              <FontAwesomeIcon icon={faNewspaper} className="w-4 h-4 mr-2" />
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