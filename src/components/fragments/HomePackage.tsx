import { Link } from 'react-router-dom';
import Pa from '../../img/kyp/hero1.jpg';
import Pa2 from '../../img/kyp/hero5.jpg';

const HomePackage = () => {
  const packages = [
    {
      id: 1,
      name: 'Dolphin Tours',
      imageSrc: Pa,
      imageAlt: 'Lovina Dolphin Tours',
      url: '/package/1',
    },
    {
      id: 2,
      name: 'Bali Tours and Destination',
      imageSrc: Pa2,
      imageAlt: 'Bali tours and destination',
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
            <img src={pkg.imageSrc} alt={pkg.imageAlt} className="h-[230px] w-full object-cover" />
            <div className="flex flex-col gap-2 px-4 py-2 border-t">
              <p className="text-center font-semibold text-lg text-gray-700">{pkg.name}</p>
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
