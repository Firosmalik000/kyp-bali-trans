import { useState, useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import HeroImage2 from '../../img/kyp/hero1.jpg';
import HeroImage from '../../img/kyp/hero2.jpg';
import HeroImage3 from '../../img/kyp/hero3.jpg';
import HeroImage4 from '../../img/kyp/hero4.jpg';
import HeroImage5 from '../../img/kyp/hero5.jpg';
import { useLanguage } from '../../hooks/UseLanguage';

const HomeHero = () => {
  const images = [HeroImage, HeroImage2, HeroImage3, HeroImage4, HeroImage5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const content = {
    en: {
      title: 'Get Comfortable Tour & Travel With Us',
      description: 'For More Complete Information About Destinations And Prices',
      contact: 'Contact Us',
    },
    id: {
      title: 'Rasakan Kenyamanan Tour & Travel Bersama Kami',
      description: 'Untuk Informasi Lebih Lengkap Tentang Destinasi dan Harga',
      contact: 'Hubungi Kami',
    },
    zh: {
      title: '与我们一起享受舒适的旅游和旅行',
      description: '获取有关目的地和价格的更多完整信息',
      contact: '联系我们',
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay gelap untuk menambahkan kontras */}
      <div className="absolute inset-0 bg-black opacity-65 z-0"></div>

      {/* Kontrol navigasi untuk gambar slider */}
      <button className="absolute left-5 top-1/2 transform -translate-y-1/2 px-4 py-4 bg-black bg-opacity-50 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-200 z-20" onClick={prevImage}>
        <GrFormPrevious />
      </button>
      <button className="absolute right-5 top-1/2 transform -translate-y-1/2 px-4 py-4 bg-black bg-opacity-50 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-200 z-20" onClick={nextImage}>
        <GrFormNext />
      </button>

      {/* Konten hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-4 px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{content[language].title}</h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">{content[language].description}</p>
        <a href="https://wa.me/6282340332580" target="_blank" rel="noopener noreferrer" className="w-48 bg-gray-500 hover:bg-white text-white hover:text-gray-500 font-semibold py-2 rounded-lg shadow-md transition-all duration-300">
          {content[language].contact}
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
