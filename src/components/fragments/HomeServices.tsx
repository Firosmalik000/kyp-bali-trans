import CardHome from '../CardHome';
import { FaBuilding } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa6';
import { GiDolphin } from 'react-icons/gi';
import { useLanguage } from '../../hooks/UseLanguage';

const HomeServices = () => {
  const { language } = useLanguage();

  const titleContent = {
    en: 'Our Services',
    id: 'Layanan Kami',
    zh: '我们的服务',
  };

  const cardContent = {
    en: [
      {
        id: 1,
        title: 'Explore North Bali Wonders',
        description: 'Discover the hidden gems of North Bali with our exclusive tour, immersing yourself in nature and culture like never before.',
        icon: <FaBuilding className="text-[100px] text-gray-500" />,
      },
      {
        id: 2,
        title: 'Seamless Hotel Transfers',
        description: 'Enjoy a hassle-free journey as we escort you from one hotel to another, ensuring a smooth transition for your stay.',
        icon: <FaCar className="text-[100px] text-yellow-500" />,
      },
      {
        id: 3,
        title: 'Lovina Dolphin Adventure',
        description: 'Experience the thrill of watching playful dolphins in their natural habitat, with added opportunities for swimming and snorkeling.',
        icon: <GiDolphin className="text-[100px] text-blue-500" />,
      },
    ],
    id: [
      {
        id: 1,
        title: 'Jelajahi Keajaiban Bali Utara',
        description: 'Temukan permata tersembunyi di Bali Utara dengan tur eksklusif kami, meresapi alam dan budaya seperti belum pernah sebelumnya.',
        icon: <FaBuilding className="text-[100px] text-gray-500" />,
      },
      {
        id: 2,
        title: 'Transfer Hotel Tanpa Kendala',
        description: 'Nikmati perjalanan tanpa repot saat kami mengantar Anda dari satu hotel ke hotel lain, memastikan transisi yang lancar untuk masa menginap Anda.',
        icon: <FaCar className="text-[100px] text-yellow-500" />,
      },
      {
        id: 3,
        title: 'Petualangan Lumba-lumba Lovina',
        description: 'Rasakan sensasi menyaksikan lumba-lumba yang bermain di habitat alami mereka, dengan kesempatan untuk berenang dan snorkeling.',
        icon: <GiDolphin className="text-[100px] text-blue-500" />,
      },
    ],
    zh: [
      {
        id: 1,
        title: '探索北巴厘岛的奇迹',
        description: '通过我们的独家旅游，发现北巴厘岛的隐藏宝藏，沉浸在前所未有的自然和文化中。',
        icon: <FaBuilding className="text-[100px] text-gray-500" />,
      },
      {
        id: 2,
        title: '无缝酒店接送',
        description: '享受无忧的旅程，我们将您从一家酒店护送到另一家，确保您的住宿顺利过渡。',
        icon: <FaCar className="text-[100px] text-yellow-500" />,
      },
      {
        id: 3,
        title: '洛维纳海豚冒险',
        description: '体验在自然栖息地观察顽皮海豚的刺激，还有游泳和浮潜的机会。',
        icon: <GiDolphin className="text-[100px] text-blue-500" />,
      },
    ],
  };

  return (
    <div className="px-2 py-16 lg:px-32 lg:py-24 bg-gray-100">
      <div className="mb-12">
        <p className="text-center text-4xl font-bold text-gray-800">{titleContent[language]}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardContent[language].map((card) => (
          <div key={card.id} className="mx-auto">
            <CardHome title={card.title} description={card.description} icon={card.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
