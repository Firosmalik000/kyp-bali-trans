import one from '../../img/kyp/gal1.jpg';
import two from '../../img/kyp/gal2.jpg';
import three from '../../img/kyp/gal3.jpg';
import four from '../../img/kyp/gal4.jpg';
import five from '../../img/kyp/gal5.jpg';
import six from '../../img/kyp/gal6.jpg';
import seven from '../../img/kyp/gal7.jpg';
import eight from '../../img/kyp/gal8.jpg';
import nine from '../../img/kyp/gal9.jpg';

import { useLanguage } from '../../hooks/UseLanguage';

const HomeGallery = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      jewelryTitle: 'Our Trip Gallery',
    },
    id: {
      jewelryTitle: 'Galeri Perjalanan Kami',
    },
    zh: {
      jewelryTitle: '我们的旅行画廊',
    },
  };

  const classImg = 'w-full h-[300px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300';

  return (
    <section id="jewelry" className="w-full py-16 bg-gray-50 px-6 md:px-[100px]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 font-sans">{content[language].jewelryTitle}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src={one} alt="Jewelry 1" className={classImg} />
        <img src={two} alt="Jewelry 2" className={classImg} />
        <img src={three} alt="Jewelry 3" className={classImg} />
        <img src={four} alt="Jewelry 4" className={classImg} />
        <img src={five} alt="Jewelry 5" className={classImg} />
        <img src={six} alt="Jewelry 6" className={classImg} />
        <img src={seven} alt="Jewelry 7" className={classImg} />
        <img src={eight} alt="Jewelry 8" className={classImg} />
        <img src={nine} alt="Jewelry 9" className={classImg} />
      </div>
    </section>
  );
};

export default HomeGallery;
