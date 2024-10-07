import { useLanguage } from '../../hooks/UseLanguage';

const HomeBali = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Why Visit Bali?',
      description:
        "Experience the enchanting beauty and vibrant culture of Bali, a tropical paradise that offers something for everyone. From stunning beaches and lush rice terraces to rich traditions and delicious cuisine, Bali is a destination that captivates the senses. Whether you're seeking adventure, relaxation, or a deeper connection with nature and spirituality, Bali has it all. Enjoy unique experiences like traditional Balinese ceremonies, explore vibrant local markets, or indulge in rejuvenating spa treatments. A holiday in Bali promises unforgettable memories and a chance to embrace the island's warm hospitality, making it a must-visit destination for travelers.",
    },
    zh: {
      title: '为什么在巴厘岛制作珠宝？',
      description: '通过珠宝制作艺术表达您的创造力，体验正宗的印度尼西亚文化。我们提供使用手工技术制作银饰的新体验。这是一项与家人和朋友一起进行的精彩活动，您可以带回一件美丽的纪念品，永远珍藏您在巴厘岛的时光。',
    },
    id: {
      title: 'Mengapa Membuat Perhiasan di Bali?',
      description:
        'Ekspresikan kreativitas Anda dan dapatkan pengalaman budaya Indonesia yang otentik melalui seni pembuatan perhiasan. Kami menawarkan pengalaman baru dalam membuat perhiasan perak menggunakan teknik manual. Ini adalah kegiatan yang luar biasa dilakukan bersama keluarga dan teman, dan Anda dapat membawa kenang-kenangan indah dari waktu Anda di Bali untuk dikenang selamanya.',
    },
    jp: {
      title: 'なぜバリでジュエリー作り？',
      description:
        'ジュエリー作りの芸術を通じて、あなたの創造性を表現し、インドネシアの本物の文化体験を楽しんでください。私たちは手作業による銀のジュエリー作りの新しい体験を提供しています。これは家族や友人と一緒に楽しむのに素晴らしいアクティビティであり、バリでの時間を永遠に大切にする美しい思い出を持ち帰ることができます。',
    },
    ko: {
      title: '왜 발리에서 보석 만들기를 해야하나요?',
      description:
        '보석 제작의 예술을 통해 창의력을 표현하고 진정한 인도네시아 문화를 체험하세요. 저희는 수작업 기법을 사용한 은 보석 제작의 새로운 경험을 제공합니다. 가족과 친구와 함께하기에 멋진 활동이며, 발리에서 보낸 시간을 영원히 간직할 수 있는 아름다운 기념품을 가져갈 수 있습니다.',
    },
  };

  return (
    <div className="w-full min-h-[300px] bg-gray-200 md:px-[100px] px-[50px] py-[100px]">
      <p className="text-xl font-semibold mb-4 text-center">{content[language].title}</p>
      <p className="text-base leading-relaxed text-justify">{content[language].description}</p>
    </div>
  );
};

export default HomeBali;
