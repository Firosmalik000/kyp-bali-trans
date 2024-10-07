import { useLanguage } from '../../hooks/UseLanguage';

const Tours = () => {
  const { language } = useLanguage();

  const halfDayPrograms = {
    en: [
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
    ],
    id: [
      {
        title: 'PROGRAM 1',
        attractions: ['Vihara Brahma Arama (Vihara Buddha)', 'Pemandian Air Panas Banjar'],
      },
      {
        title: 'PROGRAM 2',
        attractions: ['Air Terjun Aling - Aling', 'Pura Beji', 'Pura Maduwe Karang'],
      },
      {
        title: 'PROGRAM 3',
        attractions: ['Air Terjun Sekumpul'],
      },
      {
        title: 'PROGRAM 4',
        attractions: ['Air Terjun Gitgit Twin', 'Air Terjun Colek Pamor', 'Air Terjun Aling - Aling'],
      },
      {
        title: 'PROGRAM 5',
        attractions: ['Air Terjun Munduk', 'Air Terjun Red Coral', 'Air Terjun Labuan Kebo', 'Air Terjun Melanting'],
      },
      {
        title: 'PROGRAM G',
        attractions: ['Trekking Tamblingan & Danau Kembar'],
      },
    ],
    zh: [
      {
        title: '项目 1',
        attractions: ['梵天寺 (佛教寺庙)', '班贾尔温泉'],
      },
      {
        title: '项目 2',
        attractions: ['阿灵-阿灵瀑布', '贝吉庙', '玛杜威卡朗庙'],
      },
      {
        title: '项目 3',
        attractions: ['塞孔布尔瀑布'],
      },
      {
        title: '项目 4',
        attractions: ['吉吉双子瀑布', '科列克帕莫尔瀑布', '阿灵-阿灵瀑布'],
      },
      {
        title: '项目 5',
        attractions: ['蒙杜克瀑布', '红珊瑚瀑布', '拉布安克博瀑布', '梅兰廷瀑布'],
      },
      {
        title: '项目 G',
        attractions: ['Tamblingan 徒步旅行 & 双湖美景独木舟'],
      },
    ],
  };

  const fullDayPrograms = {
    en: [
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
    ],
    id: [
      {
        title: 'TOUR SEHARI PENUH (10 JAM)',
        subtitle: 'PROGRAM TOUR TIMUR',
        attractions: ['Vihara Brahma Arama (Vihara Buddha)', 'Pemandian Air Panas Banjar', 'Pura Beji', 'Pura Maduwe Karang', 'Air Terjun Aling - Aling', 'Air Terjun Gitgit Twin', 'Air Terjun Colek Pamor', 'Air Terjun Sekumpul'],
      },
      {
        title: 'TOUR SEHARI PENUH (10 JAM)',
        subtitle: 'PROGRAM TOUR BARAT',
        attractions: [
          'Air Terjun Munduk',
          'Air Terjun Red Coral',
          'Air Terjun Labuan Kebo',
          'Air Terjun Melanting',
          'Trekking Tamblingan & Danau Kembar',
          'Air Terjun Banyumala',
          'Kebun Kopi',
          'Air Terjun Banyuwana',
          'Gerbang Handara',
          'Pura Ulundanu Beratan',
        ],
      },
    ],
    zh: [
      {
        title: '全天游 (10 小时)',
        subtitle: '东部游程',
        attractions: ['梵天寺 (佛教寺庙)', '班贾尔温泉', '贝吉庙', '玛杜威卡朗庙', '阿灵-阿灵瀑布', '吉吉双子瀑布', '科列克帕莫尔瀑布', '塞孔布尔瀑布'],
      },
      {
        title: '全天游 (10 小时)',
        subtitle: '西部游程',
        attractions: ['蒙杜克瀑布', '红珊瑚瀑布', '拉布安克博瀑布', '梅兰廷瀑布', 'Tamblingan 徒步旅行 & 双湖美景独木舟', '班尤玛拉瀑布', '咖啡种植园', '班尤瓦那瀑布', '汉达拉之门', '乌伦达努巴拉坦寺'],
      },
    ],
  };

  const halfDay = halfDayPrograms[language] || halfDayPrograms['en'];
  const fullDay = fullDayPrograms[language] || fullDayPrograms['en'];

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-3">{language === 'en' ? 'HALF DAY TOUR (5 HOURS)' : language === 'id' ? 'TOUR SETENGAH HARI (5 JAM)' : '半天游 (5 小时)'}</h2>
      <p className="text-center mb-6">Start from IDR 499.000</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {halfDay.map((program, index) => (
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

      <h2 className="text-2xl font-bold text-center mb-3">{language === 'en' ? 'FULL DAY TOUR (10 HOURS)' : language === 'id' ? 'TOUR SEHARI PENUH (10 JAM)' : '全天游 (10 小时)'}</h2>
      <p className="text-center mb-6">Start from IDR 799.000</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {fullDay.map((program, index) => (
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
