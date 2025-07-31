import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#d11e0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1h-6a1 1 0 00-1 1v9m0 0l4 4 4-4" /></svg>
    ),
    title: "Triết lý của chúng tôi",
    desc: "Chúng tôi mang theo triết lý ấy để tạo nên một nơi chốn – không phải bệnh viện, cũng không chỉ là mái ấm – mà là một không gian sống nơi tuổi già được lắng nghe, được tôn trọng, được mỉm cười vì vẫn còn điều để mong chờ.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#d11e0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h12a2 2 0 012 2v7c0 2.21-3.582 4-8 4z" /></svg>
    ),
    title: "Cách chúng tôi đồng hành cùng người già",
    desc: "Chúng tôi sống cùng họ – lắng nghe những mẩu chuyện kể đi kể lại, nắm lấy đôi tay run rẩy nhưng đầy ký ức, cùng gieo trồng một khu vườn, hay chỉ đơn giản là ngồi bên nhau dưới một buổi chiều im lặng.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#d11e0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" /></svg>
    ),
    title: "Quan điểm về tuổi già",
    desc: "Với chúng tôi, người già không phải là \"người ở lại\" – mà là những người cần được sống tiếp, một cách đúng nghĩa.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#d11e0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-1.382 2.764A2 2 0 0117.382 17H6.618a2 2 0 01-1.789-1.342l-1.382-2.764A2 2 0 014.236 10H9m5 0V6a2 2 0 10-4 0v4m4 0H9" /></svg>
    ),
    title: "Gửi đến những người con đang loay hoay",
    desc: "Và với bạn – những người con đang loay hoay giữa bổn phận và yêu thương – Ikigai là nơi để bạn nhẹ lòng. Bởi vì ở đây, cha mẹ bạn không bị quên lãng. Họ vẫn có người cạnh bên. Họ vẫn có một lý do để bước thêm một ngày nữa, với nụ cười thật khẽ, nhưng rất thật.",
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer cho animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className={`text-center mb-10 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-[#d11e0f] font-semibold mb-2 text-lg">Tại sao chọn chúng tôi?</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tại sao chọn chúng tôi?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-excalifont">
            Ikigai – trong tiếng Nhật – là lý do để ta muốn thức dậy vào buổi sáng. <br /> Là điều khiến trái tim vẫn còn đập không chỉ vì nó phải, mà vì nó muốn.
          </p>
        </div>
        <div className={`grid md:grid-cols-3 gap-8 items-stretch transition-all duration-1000 ease-out delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left: 4 cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start h-full transition-all duration-800 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${0.5 + i * 0.2}s` }}
              >
                <div className="mb-4">{r.icon}</div>
                <div className="font-bold text-xl mb-2">{r.title}</div>
                <div className="text-gray-600">{r.desc}</div>
              </div>
            ))}
          </div>
          {/* Right: Image */}
          <div className={`flex items-center justify-center transition-all duration-800 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
          }`} style={{ transitionDelay: '1.3s' }}>
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg min-h-[300px]">
              <Image
                src="/images/ONSEN 10_4.png"
                alt="Caring Team"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}