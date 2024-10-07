import AboutJpg from '../img/kyp/about.jpg';
import { useLanguage } from '../hooks/UseLanguage';

const AboutUs = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      description:
        'KYP BALI TRANS is a transportation service based in North Bali, specifically in Lovina. We offer a variety of services, including North Bali tours, hotel transfers, and dolphin tours. Enjoy the comfort of your journey and vacation in North Bali with us.',
    },
    id: {
      title: 'Tentang Kami',
      description:
        'KYP BALI TRANS adalah layanan transportasi yang berbasis di Bali Utara, khususnya di Lovina. Kami menawarkan berbagai layanan, termasuk tur Bali Utara, transfer hotel, dan tur lumba-lumba. Nikmati kenyamanan perjalanan dan liburan Anda di Bali Utara bersama kami.',
    },
    zh: {
      title: '关于我们',
      description: 'KYP BALI TRANS 是一家位于巴厘岛北部，特别是在洛维纳的运输服务公司。我们提供各种服务，包括北巴厘岛旅行、酒店接送服务和海豚旅行。与我们一起享受北巴厘岛的舒适旅程和假期。',
    },
  };

  return (
    <div className="pt-[200px] pb-10 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex flex-col w-[300px] gap-4">
        <p className="font-sans text-4xl font-semibold text-center md:text-end">{content[language].title}</p>
        <p className="text-gray-700 text-justify">{content[language].description}</p>
      </div>
      <div className="flex justify-center">
        <img src={AboutJpg} className="w-[500px] rounded-lg shadow-lg" alt="About KYP Bali Trans" />
      </div>
    </div>
  );
};

export default AboutUs;
