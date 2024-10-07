import { useLanguage } from '../../hooks/UseLanguage';

interface PackageOption {
  package: string;
  price: string;
}

interface PackageDetail {
  regular?: PackageOption[];
  privat?: PackageOption[];
  images: string[];
}

interface PackageSatuProps {
  pkg: PackageDetail;
}

const PackageSatu = ({ pkg }: PackageSatuProps) => {
  const { language } = useLanguage();

  const titleContent = {
    en: {
      regular: 'Regular Packages',
      privat: 'Private Boat Packages',
    },
    id: {
      regular: 'Paket Reguler',
      privat: 'Paket Perahu Pribadi',
    },
    zh: {
      regular: '常规套餐',
      privat: '私人船只套餐',
    },
  };

  return (
    <section>
      <div className="max-w-[1200px] mx-auto mb-12">
        {/* Regular Packages Table */}
        {pkg.regular && (
          <div className="mb-6">
            <h3 className="text-center text-xl font-bold mb-4">{titleContent[language].regular}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Package</th>
                    <th className="py-2 px-4 border-b">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.regular.map((option, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 border-b">{option.package}</td>
                      <td className="py-2 px-4 border-b">{option.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Private Boat Packages Table */}
        {pkg.privat && (
          <div>
            <h3 className="text-center text-xl font-bold mb-4">{titleContent[language].privat}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Package</th>
                    <th className="py-2 px-4 border-b">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.privat.map((option, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 border-b">{option.package}</td>
                      <td className="py-2 px-4 border-b">{option.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Images Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {pkg.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Package image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSatu;
