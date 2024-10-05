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
    <section className="w-full py-16 bg-gray-50 px-14 md:px-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {cardContent.map((card) => (
          <CardHome key={card.id} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
