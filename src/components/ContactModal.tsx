"use client";
import { useState, useEffect } from "react";

interface Province {
  province_code: string;
  name: string;
  short_name: string;
  code: string;
  place_type: string;
  wards: Ward[];
}

interface Ward {
  ward_code: string;
  name: string;
  province_code: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    province: "",
    ward: "",
  });
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [selectedWards, setSelectedWards] = useState<Ward[]>([]);
  const [isLoadingProvinces, setIsLoadingProvinces] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const validatePhoneNumber = (phone: string) => {
    // Loại bỏ tất cả ký tự không phải số
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Kiểm tra độ dài (10-11 chữ số)
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return "Số điện thoại phải có 10-11 chữ số";
    }
    
    // Kiểm tra đầu số Việt Nam
    const validPrefixes = ['03', '05', '07', '08', '09'];
    const prefix = cleanPhone.substring(0, 2);
    
    if (!validPrefixes.includes(prefix)) {
      return "Số điện thoại không đúng định dạng Việt Nam";
    }
    
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    const phoneValidation = validatePhoneNumber(formData.phone);
    if (phoneValidation) {
      setPhoneError(phoneValidation);
      return;
    }
    
    setPhoneError("");
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  // Load provinces data
  useEffect(() => {
    const loadProvinces = async () => {
      setIsLoadingProvinces(true);
      try {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error('Error loading provinces:', error);
      } finally {
        setIsLoadingProvinces(false);
      }
    };

    if (isOpen) {
      loadProvinces();
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear phone error when user starts typing
    if (name === 'phone') {
      setPhoneError("");
    }

    // Update wards when province changes
    if (name === 'province') {
      const selectedProvince = provinces.find(p => p.province_code === value);
      setSelectedWards(selectedProvince?.wards || []);
      setFormData(prev => ({ ...prev, ward: "" }));
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsModalVisible(true), 10);
    } else {
      setIsModalVisible(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center animate-scaleIn">
            <div className="mb-4 animate-bounce">
              <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thành công!</h3>
            <p className="text-gray-600 mb-4">Yêu cầu tư vấn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất!</p>
            <button
              onClick={() => {
                setShowSuccess(false);
                onClose();
              }}
              className="bg-[#d11e0f] hover:bg-[#b01a0d] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
      <div className={`bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto transition-all duration-300 transform ${
        isModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Đặt lịch tư vấn</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent"
              placeholder="Nhập họ và tên"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent ${
                phoneError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Nhập số điện thoại"
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>

          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
              Tỉnh/Thành phố *
            </label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent bg-white"
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {isLoadingProvinces ? (
                <option value="" disabled>Đang tải...</option>
              ) : (
                provinces.map((province) => (
                  <option key={province.province_code} value={province.province_code}>
                    {province.name}
                  </option>
                ))
              )}
            </select>
            {provinces.length > 0 && !isLoadingProvinces && (
              <p className="text-xs text-gray-500 mt-1">{provinces.length} tỉnh/thành phố</p>
            )}
          </div>

          <div>
            <label htmlFor="ward" className="block text-sm font-medium text-gray-700 mb-1">
              Xã/Phường *
            </label>
            <select
              id="ward"
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              required
              disabled={!formData.province}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d11e0f] focus:border-transparent ${
                !formData.province ? 'bg-gray-100 cursor-not-allowed' : 'bg-white border-gray-300'
              }`}
            >
              <option value="">
                {!formData.province ? 'Vui lòng chọn tỉnh/thành phố trước' : 'Chọn xã/phường'}
              </option>
              {selectedWards.map((ward) => (
                <option key={ward.ward_code} value={ward.ward_code}>
                  {ward.name}
                </option>
              ))}
            </select>
            {formData.province && selectedWards.length > 0 && (
              <p className="text-xs text-gray-500 mt-1">Có {selectedWards.length} xã/phường</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#d11e0f] hover:bg-[#b01a0d] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
          >
            Gửi yêu cầu tư vấn
          </button>
        </form>
      </div>
    </div>
  );
} 