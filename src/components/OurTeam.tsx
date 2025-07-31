import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const team = [
  {
    name: "Dr. Michael Evans",
    title: "Geriatric Specialist",
    img: "/team/doctor1.jpg",
  },
  {
    name: "Dr. Anna Lee",
    title: "Senior Care Physician",
    img: "/team/doctor2.jpg",
  },
  {
    name: "Dr. John Smith",
    title: "Rehabilitation Expert",
    img: "/team/doctor3.jpg",
  },
  {
    name: "Dr. Emily Tran",
    title: "Wellness Coordinator",
    img: "/team/doctor4.jpg",
  },
];

function getVisibleCount(width: number) {
  if (width >= 1024) return 4;
  if (width >= 768) return 2;
  return 1;
}

export default function OurTeam() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const maxIndex = team.length - visibleCount;

  // Đảm bảo current không vượt quá maxIndex khi visibleCount thay đổi
  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, maxIndex)));
  }, [visibleCount, maxIndex]);

  const prev = () => {
    if (current === 0) {
      setCurrent(team.length - visibleCount);
    } else {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current >= team.length - visibleCount) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  // Tạo mảng hiển thị với vòng lặp
  const getDisplayItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (current + i) % team.length;
      items.push(team[index]);
    }
    return items;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#f8f7f2]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className={`text-center mb-10 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-[#d11e0f] font-semibold mb-2 text-lg">Đội ngũ của chúng tôi</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Đội ngũ chuyên gia tận tâm, giàu kinh nghiệm luôn đồng hành cùng khách hàng trên hành trình sống khỏe mạnh và ý nghĩa.
          </p>
        </div>
        <div className={`relative mb-10 transition-all duration-1000 ease-out delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Slider */}
          <div className="flex overflow-x-hidden">
            {getDisplayItems().map((member, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center mx-2 min-w-0 w-full mb-10 transition-all duration-800 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${0.5 + i * 0.2}s` }}
              >
                <div className="w-full aspect-[3/4] bg-gray-100">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 w-full text-center">
                  <div className="font-bold text-2xl mb-2">{member.name}</div>
                  <div className="text-gray-500 text-lg">{member.title}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation */}
          <button
            onClick={prev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#d11e0f] hover:text-white text-[#d11e0f] p-3 rounded-full shadow transition-all duration-500 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '1.2s' }}
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#d11e0f] hover:text-white text-[#d11e0f] p-3 rounded-full shadow transition-all duration-500 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '1.2s' }}
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}