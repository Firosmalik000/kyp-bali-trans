/* eslint-disable @typescript-eslint/no-explicit-any */
import Pa1 from '../../img/kyp/hero1.jpg';
import Pa2 from '../../img/kyp/gal9.jpg';
import Pa3 from '../../img/kyp/gal7.jpg';
import Pa4 from '../../img/kyp/satu.jpg';
import Pa5 from '../../img/kyp/hero4.jpg';
import Pa6 from '../../img/kyp/hero5.jpg';
import Tours from './Tours';

const Package2 = () => {
  const images: any[] = [Pa1, Pa2, Pa3, Pa4, Pa5, Pa6];

  return (
    <section>
      <Tours />
      <div className="flex min-w-0 mx-auto overflow-x-auto gap-4 mt-8">
        {images.map((image, index) => (
          <div key={index} className="min-w-[400px] overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Package image ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Package2;
