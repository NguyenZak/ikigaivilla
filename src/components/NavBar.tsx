"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-lg py-4 px-8">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={300} height={200} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-[#d11e0f] font-semibold">Về chúng tôi</Link>
          <Link href="/services" className="text-gray-700 hover:text-[#d11e0f] font-semibold">Tiện ích đặc quyền</Link>
          <Link href="/rooms" className="text-gray-700 hover:text-[#d11e0f] font-semibold">Các hạng phòng</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-[#d11e0f] font-semibold">Bảng giá</Link>
          <Link href="/news" className="text-gray-700 hover:text-[#d11e0f] font-semibold">Tin Tức</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#d11e0f] font-semibold">Liên hệ</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
        <div className="flex flex-col space-y-4 px-8">
          <Link href="/about" className="text-gray-700 hover:text-[#d11e0f] font-semibold py-2">Về chúng tôi</Link>
          <Link href="/services" className="text-gray-700 hover:text-[#d11e0f] font-semibold py-2">Tiện ích đặc quyền</Link>
          <Link href="/rooms" className="text-gray-700 hover:text-[#d11e0f] font-semibold py-2">Các hạng phòng</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-[#d11e0f] font-semibold py-2">Bảng giá</Link>
          <Link href="/news" className="text-gray-700 hover:text-[#d11e0f] font-semibold py-2">Tin tức</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#d11e0f] font-semibold py-2">Liên hệ</Link>
        </div>
      </div>
    </nav>
  );
}