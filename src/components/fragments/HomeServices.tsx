import CardHome from '../CardHome';
import { FaBuilding } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa6';
import { GiDolphin } from 'react-icons/gi';

const HomeServices = () => {
  const cardContent = [
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
  ];

  return (
    <div className="px-2 py-16 lg:px-32 lg:py-24 bg-gray-100">
      <div className="mb-12">
        <p className="text-center text-4xl font-bold text-gray-800">Our Services</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardContent.map((card) => (
          <div key={card.id} className="mx-auto">
            <CardHome title={card.title} description={card.description} icon={card.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
