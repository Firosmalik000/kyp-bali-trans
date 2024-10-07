import React from 'react';

const Tours = () => {
  const halfDayPrograms = [
    {
      title: 'PROGRAM 1',
      attractions: ['Vihara Brahma Arama (Buddhist Temple)', 'Banjar Hot Spring'],
    },
    {
      title: 'PROGRAM 2',
      attractions: ['Aling - Aling Waterfall', 'Beji Temple', 'Maduwe Karang Temple'],
    },
    {
      title: 'PROGRAM 3',
      attractions: ['Sekumpul Waterfall'],
    },
    {
      title: 'PROGRAM 4',
      attractions: ['Gitgit Twin Waterfall', 'Colek Pamor Waterfall', 'Aling - Aling Waterfall'],
    },
    {
      title: 'PROGRAM 5',
      attractions: ['Munduk Waterfall', 'Red Coral Waterfall', 'Labuan Kebo Waterfall', 'Melanting Waterfall'],
    },
    {
      title: 'PROGRAM G',
      attractions: ['Tamblingan Trekking & Canoe Twin Lake View'],
    },
  ];

  const fullDayPrograms = [
    {
      title: 'FULL DAY TOUR (10 HOURS)',
      subtitle: 'PROGRAM TOUR EAST',
      attractions: ['Vihara Brahma Arama (Buddhist Temple)', 'Banjar Hot Spring', 'Beji Temple', 'Maduwe Karang Temple', 'Aling - Aling Waterfall', 'Gitgit Twin Waterfall', 'Colek Pamor Waterfall', 'Sekumpul Waterfall'],
    },
    {
      title: 'FULL DAY TOUR (10 HOURS)',
      subtitle: 'PROGRAM TOUR WEST',
      attractions: [
        'Munduk Waterfall',
        'Red Coral Waterfall',
        'Labuan Kebo Waterfall',
        'Melanting Waterfall',
        'Tamblingan Trekking & Canoe Twin Lake View',
        'Banyumala Waterfall',
        'Coffee Plantation',
        'Banyuwana Waterfall',
        'Handara Gate',
        'Ulundanu Beratan Temple',
      ],
    },
  ];

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-3">HALF DAY TOUR (5 HOURS)</h2>
      <p className="text-center mb-6">Start from IDR 499.000</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {halfDayPrograms.map((program, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {program.attractions.map((attraction, i) => (
                <li key={i} className="mb-1">
                  {attraction}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-3">FULL DAY TOUR (10 HOURS)</h2>
      <p className="text-center mb-6">Start from IDR 799.000</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {fullDayPrograms.map((program, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
            <h4 className="text-lg font-semibold text-gray-600 mb-2">{program.subtitle}</h4>
            <ul className="list-disc pl-5 text-gray-700">
              {program.attractions.map((attraction, i) => (
                <li key={i} className="mb-1">
                  {attraction}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
