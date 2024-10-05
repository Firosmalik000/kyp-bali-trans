/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import Pa1 from '../img/kyp/hero1.jpg';
import Pa2 from '../img/kyp/gal3.jpg';
import Pa3 from '../img/kyp/gal6.jpg';
import { useLanguage } from '../hooks/UseLanguage';

interface PackageDetail {
  title: string;
  details: string[];
  images: string[];
}

interface PackageDetails {
  [key: string]: {
    [key: string]: PackageDetail;
  };
}

const PackageDetail = () => {
  const { language } = useLanguage();
  const { id } = useParams<{ id: string }>(); // Mengambil id dari URL
  console.log({ id });

  const packageDetails: PackageDetails = {
    en: {
      1: {
        title: 'Traditional Silver Class',
        details: ['Including 1-7 gr silver (extra silver will be charged based on market value)', 'Duration: 2-3 hours', 'Including free flow water', 'Break time with snacks, coffee & tea'],
        images: [Pa1, Pa2, Pa3],
      },
      2: {
        title: 'Dummy Package',
        details: ['This is a dummy package for testing purposes.', 'Duration: 1 hour', 'Includes snacks and beverages'],
        images: [Pa1, Pa2, Pa3],
      },
    },
  };

  const pkg = id ? packageDetails[language][id] : undefined;

  if (!pkg) {
    return <div className="text-center text-2xl text-red-500 py-16">Package not found</div>;
  }

  return (
    <div className="px-8 pt-32 pb-16 lg:px-32 lg:pt-[150px] bg-gray-100">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{pkg.title}</h1>
      </div>

      {id === '2' ? (
        <div className="bg-blue-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Special Offer</h2>
          <p className="text-lg text-gray-600 mb-4">Get a special discount on our Dummy Package!</p>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
            {pkg.details.map((detail: any, index: number) => (
              <li key={index} className="text-center">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto mb-12">
          <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
            {pkg.details.map((detail: any, index: number) => (
              <p key={index} className="text-center">
                {detail}
              </p>
            ))}
          </ul>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pkg.images.map((image: any, index: number) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`Package image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Gallery Section */}
      <div>Package Detail for ID: {id}</div>
    </div>
  );
};

export default PackageDetail;
