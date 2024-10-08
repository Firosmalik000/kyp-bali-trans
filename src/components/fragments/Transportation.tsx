import { useLanguage } from '../../hooks/UseLanguage';
import car1 from '../../img/kyp/trans1.png';
import car2 from '../../img/kyp/trans2.png';

const Transportation = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Transportation Ready for Your Journey',
      description: 'Choose from our wide range of vehicles to make your journey comfortable and enjoyable.',
      vehicles: ['Ertiga', 'Hiace'],
    },
    id: {
      title: 'Transportasi Siap untuk Perjalanan Anda',
      description: 'Pilih dari berbagai jenis kendaraan kami untuk membuat perjalanan Anda nyaman dan menyenangkan.',
      vehicles: ['Ertiga', 'Hiace'],
    },
    zh: {
      title: '为您的旅程准备的交通工具',
      description: '从我们各种各样的车辆中选择，让您的旅程舒适愉快。',
      vehicles: ['Ertiga', 'Hiace'],
    },
  };

  return (
    <section className="px-4 py-12 sm:px-10 lg:px-20 bg-gray-100">
      <div className="mx-auto mb-8 text-center">
        <p className="text-4xl font-bold text-gray-800 mb-4">{content[language].title}</p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">{content[language].description}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Vehicle 1 */}
        <div className="rounded-lg p-4 text-center max-w-[350px] sm:max-w-[400px] lg:max-w-[500px]">
          <img src={car1} className="w-full h-auto mx-auto mb-2" alt={content[language].vehicles[0]} />
          <p className="font-semibold text-lg">{content[language].vehicles[0]}</p>
        </div>
        {/* Vehicle 2 */}
        <div className="rounded-lg p-4 text-center max-w-[350px] sm:max-w-[400px] lg:max-w-[500px]">
          <img src={car2} className="w-full h-auto mx-auto mb-2" alt={content[language].vehicles[1]} />
          <p className="font-semibold text-lg">{content[language].vehicles[1]}</p>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
