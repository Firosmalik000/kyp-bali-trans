/* eslint-disable @typescript-eslint/no-explicit-any */
const PackageSatu = ({ pkg }: any) => {
  return (
    <section>
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
    </section>
  );
};

export default PackageSatu;
