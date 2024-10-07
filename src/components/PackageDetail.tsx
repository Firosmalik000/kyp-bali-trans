/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import Pa1 from '../img/kyp/hero1.jpg';
import Pa2 from '../img/kyp/gal3.jpg';
import Pa3 from '../img/kyp/gal6.jpg';
import { useLanguage } from '../hooks/UseLanguage';
import PackageSatu from './fragments/PackageSatu';
import Package2 from './fragments/Package2';

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
        title: 'Dolphin Tour',
        details: ['Dolphin Only', 'Dolphin + Swing', 'Dolphin + Swing' + 'Snorkling'],
        price: ['Rp. 150.000/person', 'Rp. 250.000/person', 'Rp. 350.000/person'],
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

      {id === '2' ? <Package2 pkg={pkg} /> : <PackageSatu pkg={pkg} />}
    </div>
  );
};

export default PackageDetail;
