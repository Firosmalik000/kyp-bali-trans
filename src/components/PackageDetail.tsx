/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import Pa1 from '../img/kyp/hero1.jpg';
import Pa2 from '../img/kyp/gal3.jpg';
import Pa3 from '../img/kyp/gal6.jpg';
import { useLanguage } from '../hooks/UseLanguage';
import PackageSatu from './fragments/PackageSatu';
import Package2 from './fragments/Package2';

interface PackageOption {
  package: string;
  price: string;
}

interface PackageDetail {
  title: string;
  regular?: PackageOption[];
  privat?: PackageOption[];
  details?: string[];
  price?: string[];
  images: string[];
}

// Define types for the overall package structure by language
interface PackageDetails {
  [language: string]: {
    [id: string]: PackageDetail;
  };
}
const PackageDetail = () => {
  const { language } = useLanguage();
  const { id } = useParams<{ id: string }>(); // Extracting id from URL

  const packageDetails: PackageDetails = {
    en: {
      1: {
        title: 'Dolphin Tour',
        regular: [
          { package: 'Dolphin Only', price: 'Rp. 150.000/person' },
          { package: 'Dolphin + Swing', price: 'Rp. 250.000/person' },
          { package: 'Dolphin + Swing + Snorkeling', price: 'Rp. 350.000/person' },
        ],
        privat: [
          { package: 'Dolphin Only', price: 'Rp. 800.000/person' },
          { package: 'Dolphin + Swing', price: 'Rp. 1000.000/person' },
          { package: 'Dolphin + Snorkeling + Swing', price: 'Rp. 1.200.000/person' },
        ],
        images: [Pa1, Pa2, Pa3],
      },

      2: {
        title: 'Bali Tour & Destination',
        regular: [],
        privat: [],
        images: [],
      },
    },
  };

  const pkg = id ? packageDetails[language]?.[id] : undefined;

  if (!pkg) {
    return <div className="text-center text-2xl text-red-500 py-16">Package not found</div>;
  }

  return (
    <div className="px-8 pt-32 pb-16 lg:px-32 lg:pt-[150px] bg-gray-100">
      <div className="mb-10 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">{pkg.title}</h1>
      </div>

      {id === '2' ? <Package2 /> : <PackageSatu pkg={pkg} />}
    </div>
  );
};

export default PackageDetail;
