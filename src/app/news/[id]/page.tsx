"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import { use } from "react";

interface NewsDetail {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  relatedNews: number[];
}

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const newsId = parseInt(resolvedParams.id);

  // Mock data - trong thực tế sẽ fetch từ API
  const newsData: NewsDetail[] = [
    {
      id: 1,
      title: "Ikigai Villa - Nơi nghỉ dưỡng lý tưởng cho mùa hè 2024",
      excerpt: "Khám phá những tiện ích độc đáo và dịch vụ đẳng cấp tại Ikigai Villa, nơi mang đến trải nghiệm nghỉ dưỡng hoàn hảo cho gia đình bạn.",
      content: `
        <p>Ikigai Villa tự hào giới thiệu những tiện ích mới nhất được thiết kế đặc biệt cho mùa hè 2024. Với hệ thống hồ bơi vô cực, spa onsen truyền thống Nhật Bản, và nhà hàng ẩm thực đa dạng, chúng tôi cam kết mang đến trải nghiệm nghỉ dưỡng đẳng cấp nhất cho mọi khách hàng.</p>
        
        <h2>Tiện ích độc đáo</h2>
        <p>Hệ thống hồ bơi vô cực tại Ikigai Villa được thiết kế theo phong cách Nhật Bản, tạo cảm giác hòa quyện với thiên nhiên. Nước hồ bơi được xử lý bằng công nghệ hiện đại, đảm bảo vệ sinh và an toàn tuyệt đối.</p>
        
        <h2>Spa Onsen truyền thống</h2>
        <p>Trải nghiệm liệu pháp onsen truyền thống Nhật Bản với nguồn nước khoáng tự nhiên. Các phòng spa được thiết kế theo phong cách Nhật Bản, mang đến không gian thư giãn hoàn hảo.</p>
        
        <h2>Nhà hàng ẩm thực đa dạng</h2>
        <p>Thưởng thức những món ăn đặc sắc từ ẩm thực Nhật Bản và Việt Nam. Đầu bếp trưởng người Nhật sẽ mang đến những hương vị độc đáo và chân thực nhất.</p>
        
        <h2>Dịch vụ đẳng cấp 5 sao</h2>
        <p>Với đội ngũ nhân viên chuyên nghiệp và dịch vụ 24/7, Ikigai Villa cam kết mang đến trải nghiệm nghỉ dưỡng hoàn hảo cho mọi khách hàng.</p>
      `,
      image: "/banner/ONSEN 10_4.png",
      category: "Tin tức",
      date: "15/12/2024",
      author: "Ikigai Villa",
      readTime: "5 phút",
      tags: ["Nghỉ dưỡng", "Spa", "Ẩm thực", "Mùa hè"],
      relatedNews: [2, 3, 4]
    },
    {
      id: 2,
      title: "Khám phá ẩm thực độc đáo tại Nhà hàng Ikigai",
      excerpt: "Trải nghiệm hương vị ẩm thực Nhật Bản truyền thống kết hợp với ẩm thực Việt Nam hiện đại.",
      content: `
        <p>Nhà hàng Ikigai tự hào giới thiệu thực đơn mới với sự kết hợp hoàn hảo giữa ẩm thực Nhật Bản truyền thống và ẩm thực Việt Nam hiện đại. Dưới sự chỉ đạo của đầu bếp trưởng người Nhật, mỗi món ăn đều được chế biến tỉ mỉ với nguyên liệu tươi ngon nhất.</p>
        
        <h2>Thực đơn đặc biệt</h2>
        <p>Thực đơn mới bao gồm các món ăn truyền thống Nhật Bản như sushi, sashimi, tempura, và các món ăn Việt Nam được chế biến theo cách hiện đại.</p>
        
        <h2>Nguyên liệu tươi ngon</h2>
        <p>Tất cả nguyên liệu đều được nhập khẩu trực tiếp từ Nhật Bản và chọn lọc kỹ lưỡng từ các nhà cung cấp uy tín tại Việt Nam.</p>
      `,
      image: "/banner/CONG CHINH 2_3.png",
      category: "Ẩm thực",
      date: "12/12/2024",
      author: "Chef Tanaka",
      readTime: "3 phút",
      tags: ["Ẩm thực", "Nhà hàng", "Nhật Bản", "Việt Nam"],
      relatedNews: [1, 3, 5]
    },
    {
      id: 3,
      title: "Spa Onsen - Liệu pháp thư giãn đẳng cấp Nhật Bản",
      excerpt: "Trải nghiệm liệu pháp onsen truyền thống Nhật Bản ngay tại Ikigai Villa.",
      content: `
        <p>Spa Onsen tại Ikigai Villa mang đến trải nghiệm thư giãn đẳng cấp với các liệu pháp truyền thống Nhật Bản. Với nguồn nước khoáng tự nhiên và không gian thiết kế theo phong cách Nhật Bản, đây là nơi lý tưởng để thư giãn và phục hồi năng lượng.</p>
        
        <h2>Liệu pháp Onsen</h2>
        <p>Onsen là một phần quan trọng trong văn hóa Nhật Bản, giúp thư giãn cơ bắp và tinh thần. Tại Ikigai Villa, chúng tôi mang đến trải nghiệm onsen chân thực nhất.</p>
        
        <h2>Không gian thiết kế</h2>
        <p>Phòng spa được thiết kế theo phong cách Nhật Bản truyền thống, tạo không gian yên tĩnh và thư giãn hoàn hảo.</p>
      `,
      image: "/banner/THU VIEN 8_4.png",
      category: "Spa & Wellness",
      date: "10/12/2024",
      author: "Spa Manager",
      readTime: "4 phút",
      tags: ["Spa", "Onsen", "Thư giãn", "Nhật Bản"],
      relatedNews: [1, 2, 4]
    }
  ];

  const currentNews = newsData.find(news => news.id === newsId);

  if (!currentNews) {
    return (
      <div className="min-h-screen bg-[#f8f7f2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy tin tức</h1>
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#d11e0f] text-white px-6 py-3 rounded-lg hover:bg-[#b01a0d] transition-colors"
          >
            Quay lại trang tin tức
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f2]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-[#d11e0f] transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Quay lại
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px]">
            <Image
              src={currentNews.image}
              alt={currentNews.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-[#d11e0f] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentNews.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {currentNews.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {currentNews.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {currentNews.date}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {currentNews.readTime}
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-2" />
                  {currentNews.author}
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentNews.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {currentNews.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related News */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Tin tức liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentNews.relatedNews.map((relatedId) => {
              const relatedNews = newsData.find(news => news.id === relatedId);
              if (!relatedNews) return null;
              
              return (
                <article key={relatedNews.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedNews.image}
                      alt={relatedNews.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-[#d11e0f] font-semibold">
                      {relatedNews.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3 line-clamp-2">
                      {relatedNews.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {relatedNews.excerpt}
                    </p>
                    <button 
                      onClick={() => router.push(`/news/${relatedNews.id}`)}
                      className="text-[#d11e0f] font-semibold hover:underline text-sm"
                    >
                      Đọc thêm →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 