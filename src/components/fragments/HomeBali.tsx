import { useLanguage } from '../../hooks/UseLanguage';

const HomeBali = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Why Visit Bali?',
      description:
        "Experience the enchanting beauty and vibrant culture of Bali, a tropical paradise that offers something for everyone. From stunning beaches and lush rice terraces to rich traditions and delicious cuisine, Bali is a destination that captivates the senses. Whether you're seeking adventure, relaxation, or a deeper connection with nature and spirituality, Bali has it all. Enjoy unique experiences like traditional Balinese ceremonies, explore vibrant local markets, or indulge in rejuvenating spa treatments. A holiday in Bali promises unforgettable memories and a chance to embrace the island's warm hospitality, making it a must-visit destination for travelers.",
    },
    id: {
      title: 'Mengapa Mengunjungi Bali?',
      description:
        'Rasakan keindahan menawan dan budaya kaya Bali, surga tropis yang menawarkan sesuatu untuk semua orang. Dari pantai yang menakjubkan dan teras padi yang subur hingga tradisi yang kaya dan masakan yang lezat, Bali adalah destinasi yang memikat indera. Apakah Anda mencari petualangan, relaksasi, atau hubungan yang lebih dalam dengan alam dan spiritualitas, Bali memiliki semuanya. Nikmati pengalaman unik seperti upacara tradisional Bali, jelajahi pasar lokal yang berwarna-warni, atau nikmati perawatan spa yang menyegarkan. Liburan di Bali menjanjikan kenangan tak terlupakan dan kesempatan untuk merasakan keramahan hangat pulau ini, menjadikannya tujuan yang wajib dikunjungi bagi para pelancong.',
    },
    zh: {
      title: '为什么要访问巴厘岛？',
      description:
        '体验巴厘岛迷人的美丽和丰富的文化，这里是一个为每个人提供各种体验的热带天堂。从壮观的海滩和郁郁葱葱的稻田到丰富的传统和美味的美食，巴厘岛是一个令人心醉神迷的目的地。无论您是寻求冒险、放松，还是想与自然和灵性建立更深的联系，巴厘岛都能满足您的需求。享受传统巴厘岛仪式等独特体验，探索充满活力的当地市场，或沉浸在令人焕发活力的水疗护理中。巴厘岛的假期承诺难忘的回忆，并为您提供机会去拥抱岛上热情的待客之道，使其成为旅行者必须去的目的地。',
    },
    jp: {
      title: 'なぜバリを訪れるべきか？',
      description:
        'バリの魅力的な美しさと豊かな文化を体験してください。バリは、誰にでも何かを提供する熱帯の楽園です。美しいビーチや緑豊かな田んぼから、豊かな伝統や美味しい料理まで、バリは感覚を魅了する目的地です。冒険、リラクゼーション、または自然や精神性との深い結びつきを求めている場合でも、バリにはすべてがあります。伝統的なバリの儀式を楽しんだり、活気ある地元の市場を探索したり、リフレッシュするスパトリートメントを受けたりしてください。バリでの休暇は忘れられない思い出を約束し、島の温かいおもてなしを体験する機会を提供します。これは旅行者にとって訪れるべき目的地です。',
    },
    ko: {
      title: '왜 발리를 방문해야 하나요?',
      description:
        '발리의 매력적인 아름다움과 풍부한 문화를 경험해 보세요. 발리는 모든 사람에게 무언가를 제공하는 열대의 천국입니다. 멋진 해변과 푸른 논, 풍부한 전통과 맛있는 요리까지, 발리는 감각을 매료시키는 목적지입니다. 모험, 휴식 또는 자연 및 영성과의 깊은 연결을 원하든 발리에는 모든 것이 있습니다. 전통 발리 의식과 같은 독특한 경험을 즐기고, 활기찬 현지 시장을 탐험하거나, rejuvenating 스파 트리트먼트를 즐겨보세요. 발리에서의 휴가는 잊지 못할 추억을 약속하며, 섬의 따뜻한 환대를 느낄 수 있는 기회를 제공합니다. 여행객들에게 꼭 방문해야 할 목적지입니다.',
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
