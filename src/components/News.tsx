"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export default function News() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "Ikigai Villa - Nơi nghỉ dưỡng lý tưởng cho mùa hè 2024",
      excerpt: "Khám phá những tiện ích độc đáo và dịch vụ đẳng cấp tại Ikigai Villa, nơi mang đến trải nghiệm nghỉ dưỡng hoàn hảo cho gia đình bạn.",
      content: "Ikigai Villa tự hào giới thiệu những tiện ích mới nhất được thiết kế đặc biệt cho mùa hè 2024. Với hệ thống hồ bơi vô cực, spa onsen truyền thống Nhật Bản, và nhà hàng ẩm thực đa dạng, chúng tôi cam kết mang đến trải nghiệm nghỉ dưỡng đẳng cấp nhất cho mọi khách hàng.",
      image: "/banner/ONSEN 10_4.png",
      category: "Tin tức",
      date: "15/12/2024",
      author: "Ikigai Villa",
      readTime: "5 phút"
    },
    {
      id: 2,
      title: "Khám phá ẩm thực độc đáo tại Nhà hàng Ikigai",
      excerpt: "Trải nghiệm hương vị ẩm thực Nhật Bản truyền thống kết hợp với ẩm thực Việt Nam hiện đại.",
      content: "Nhà hàng Ikigai tự hào giới thiệu thực đơn mới với sự kết hợp hoàn hảo giữa ẩm thực Nhật Bản truyền thống và ẩm thực Việt Nam hiện đại. Dưới sự chỉ đạo của đầu bếp trưởng người Nhật, mỗi món ăn đều được chế biến tỉ mỉ với nguyên liệu tươi ngon nhất.",
      image: "/banner/CONG CHINH 2_3.png",
      category: "Ẩm thực",
      date: "12/12/2024",
      author: "Chef Tanaka",
      readTime: "3 phút"
    },
    {
      id: 3,
      title: "Spa Onsen - Liệu pháp thư giãn đẳng cấp Nhật Bản",
      excerpt: "Trải nghiệm liệu pháp onsen truyền thống Nhật Bản ngay tại Ikigai Villa.",
      content: "Spa Onsen tại Ikigai Villa mang đến trải nghiệm thư giãn đẳng cấp với các liệu pháp truyền thống Nhật Bản. Với nguồn nước khoáng tự nhiên và không gian thiết kế theo phong cách Nhật Bản, đây là nơi lý tưởng để thư giãn và phục hồi năng lượng.",
      image: "/banner/THU VIEN 8_4.png",
      category: "Spa & Wellness",
      date: "10/12/2024",
      author: "Spa Manager",
      readTime: "4 phút"
    },
    {
      id: 4,
      title: "Sự kiện đặc biệt: Đêm nhạc Jazz tại Ikigai Villa",
      excerpt: "Thưởng thức những giai điệu jazz tuyệt vời trong không gian sang trọng của Ikigai Villa.",
      content: "Ikigai Villa hân hạnh tổ chức đêm nhạc Jazz đặc biệt với sự tham gia của các nghệ sĩ nổi tiếng. Sự kiện sẽ diễn ra tại sảnh chính với không gian thiết kế sang trọng và dịch vụ ẩm thực đẳng cấp.",
      image: "/banner/CONG PHU 4_4.png",
      category: "Sự kiện",
      date: "08/12/2024",
      author: "Event Team",
      readTime: "2 phút"
    },
    {
      id: 5,
      title: "Gói nghỉ dưỡng gia đình - Ưu đãi đặc biệt mùa hè",
      excerpt: "Khám phá gói nghỉ dưỡng gia đình với nhiều ưu đãi hấp dẫn cho mùa hè 2024.",
      content: "Ikigai Villa giới thiệu gói nghỉ dưỡng gia đình đặc biệt với nhiều ưu đãi hấp dẫn. Gói bao gồm phòng nghỉ cao cấp, bữa ăn tại nhà hàng, dịch vụ spa và các hoạt động giải trí cho cả gia đình.",
      image: "/banner/PCTT 2_2.png",
      category: "Khuyến mãi",
      date: "05/12/2024",
      author: "Sales Team",
      readTime: "3 phút"
    },
    {
      id: 6,
      title: "Thiết kế nội thất độc đáo tại Ikigai Villa",
      excerpt: "Khám phá những điểm nhấn thiết kế nội thất độc đáo tại Ikigai Villa.",
      content: "Mỗi phòng nghỉ tại Ikigai Villa đều được thiết kế với sự chú ý đến từng chi tiết, kết hợp giữa phong cách Nhật Bản truyền thống và hiện đại. Nội thất được chọn lọc kỹ lưỡng với chất liệu cao cấp và màu sắc hài hòa.",
      image: "/banner/ONSEN 10_4.png",
      category: "Thiết kế",
      date: "03/12/2024",
      author: "Design Team",
      readTime: "6 phút"
    }
  ];

  const categories = ["Tất cả", "Tin tức", "Ẩm thực", "Spa & Wellness", "Sự kiện", "Khuyến mãi", "Thiết kế"];

  const filteredNews = selectedCategory === "Tất cả" 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f2] to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner/CONG PHU 4_4.png"
            alt="News Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Tin Tức & Sự Kiện
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Cập nhật những tin tức mới nhất về Ikigai Villa
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#d11e0f] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentNews.map((news) => (
              <article key={news.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d11e0f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{news.date}</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Bởi {news.author}</span>
                    <button 
                      onClick={() => router.push(`/news/${news.id}`)}
                      className="text-[#d11e0f] font-semibold hover:underline"
                    >
                      Đọc thêm
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trước
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    currentPage === page
                      ? 'bg-[#d11e0f] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-[#d11e0f]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Đăng ký nhận tin tức
          </h2>
          <p className="text-xl mb-8">
            Nhận những tin tức mới nhất về Ikigai Villa qua email
          </p>
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
      </section>
    </div>
  );
} 