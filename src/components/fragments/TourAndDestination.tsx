import one from '../../img/kyp/gal1.jpg';
import two from '../../img/kyp/hero5.jpg';
import three from '../../img/kyp/tour3.jpg';
import four from '../../img/kyp/tour4.jpg';
import five from '../../img/kyp/gal7.jpg';
import six from '../../img/kyp/tour6.jpg';
import seven from '../../img/kyp/tour7.jpg';
import eight from '../../img/kyp/about.jpg';
import nine from '../../img/kyp/tour9.jpg';

const TourAndDestination = () => {
  const HomePackage = () => {
    const packages = [
      {
        id: 1,
        name: 'Banjar Hot Spring',
        imageSrc: one,
        imageAlt: 'Banjar Hot Spring',
      },
      {
        id: 2,
        name: 'Handara Iconic Gate',
        imageSrc: two,
        imageAlt: 'Handara Iconic Gate',
      },
      {
        id: 3,
        name: 'Ulundanu Beratan Tample',
        imageSrc: three,
        imageAlt: 'Snorkeling in Bali',
      },
      {
        id: 4,
        name: 'Buddhist Temple',
        imageSrc: four,
        imageAlt: 'Buddhist Temple',
      },
      {
        id: 5,
        name: 'Beji Temple',
        imageSrc: five,
        imageAlt: 'Beji Temple',
      },
      {
        id: 6,
        name: 'Maduwe Karang Temple',
        imageSrc: six,
        imageAlt: 'Maduwe Karang Temple',
      },
      {
        id: 7,
        name: 'Munduk Tutub Waterfall',
        imageSrc: seven,
        imageAlt: 'Munduk Tutub Waterfall',
      },
      {
        id: 8,
        name: 'Tamblingan Junggle Buggy',
        imageSrc: eight,
        imageAlt: 'Tamblingan Junggle Buggy',
      },
      {
        id: 9,
        name: 'Tamblingan Trekking and Canoe',
        imageSrc: nine,
        imageAlt: 'Tamblingan Trekking and Canoe',
      },
    ];

    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="h-[320px] w-full border rounded-lg shadow-md overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300">
              <img src={pkg.imageSrc} alt={pkg.imageAlt} className="h-[230px] w-full object-cover" />
              <div className="flex flex-col gap-2 px-4 py-2 border-t">
                <p className="text-center font-semibold text-lg text-gray-700">{pkg.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="jewelry" className="w-full py-16 bg-gray-50 px-6 md:px-[100px]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 font-sans">Tour And Destination</h1>
      </div>
      <div>
        <HomePackage />
      </div>
    </section>
  );
};

export default TourAndDestination;
