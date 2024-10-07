/* eslint-disable @typescript-eslint/no-explicit-any */

const Package2 = ({ pkg }: any) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center ">
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
    </section>
  );
};

export default Package2;
