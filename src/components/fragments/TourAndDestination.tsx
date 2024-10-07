import { Link } from 'react-router-dom';
import Pa from '../../img/kyp/hero1.jpg';
import Pa2 from '../../img/kyp/hero5.jpg';
import { useLanguage } from '../../hooks/UseLanguage';

const HomePackage = () => {
  const language = useLanguage(); // Pastikan untuk mendapatkan bahasa yang aktif

  const packages = [
    {
      id: 1,
      name: {
        en: 'Dolphin Tours',
        id: 'Tur Lumba-lumba',
        zh: '海豚之旅',
      },
      imageSrc: Pa,
      imageAlt: {
        en: 'Lovina Dolphin Tours',
        id: 'Tur Lumba-lumba Lovina',
        zh: '洛维纳海豚之旅',
      },
      url: '/package/1',
    },
    {
      id: 2,
      name: {
        en: 'Bali Tours and Destination',
        id: 'Tur dan Destinasi Bali',
        zh: '巴厘岛旅游和目的地',
      },
      imageSrc: Pa2,
      imageAlt: {
        en: 'Bali tours and destination',
        id: 'Tur dan destinasi Bali',
        zh: '巴厘岛旅游和目的地',
      },
      url: '/package/2',
    },
  ];

  return (
    <div className="px-8 py-16 lg:px-32 lg:py-24 bg-gray-100">
      <div className="mb-12">
        <p className="text-center text-4xl font-bold text-gray-800">Our Packages</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="h-[320px] w-full border rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300">
            <img src={pkg.imageSrc} alt={pkg.imageAlt[language]} className="h-[230px] w-full object-cover" />
            <div className="flex flex-col gap-2 px-4 py-2 border-t">
              <p className="text-center font-semibold text-lg text-gray-700">{pkg.name[language]}</p>
              <Link to={`/package/${pkg.id}`}>
                <p className="text-center font-bold text-blue-500 hover:underline">Show Detail</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePackage;
