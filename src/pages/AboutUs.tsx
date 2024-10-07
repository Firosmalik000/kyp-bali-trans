import AboutJpg from '../img/kyp/about.jpg';
import { useLanguage } from '../hooks/UseLanguage';

const AboutUs = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      description:
        'KYP BALI TRANS is a transportation service based in North Bali, specifically in Lovina. We offer a variety of services, including North Bali tours, hotel transfers, and dolphin tours. Enjoy the comfort of your journey and vacation in North Bali with us.',
    },
    zh: {
      title: '关于我们',
      description:
        'Sri Rahayu Silver (银类和珠宝) 提供传统和独特的体验。通过在我们的当地银匠课程中花费几个小时，您将深入了解传统银制作，将原材料转变为美丽的珠宝。我们珠宝的每一个元素都是手工制作的，使用传统技术。我们还设有一个展示我们许多手工产品的展厅。',
    },
    id: {
      title: 'Tentang Kami',
      description:
        'KYP BALI TRANS is a transportation service based in North Bali, specifically in Lovina. We offer a variety of services, including North Bali tours, hotel transfers, and dolphin tours. Enjoy the comfort of your journey and vacation in North Bali with us.',
    },
    jp: {
      title: '私たちについて',
      description:
        'Sri Rahayu Silver（シルバークラスとジュエリー）は、伝統的でユニークな体験を提供します。地元の銀細工教室で数時間を過ごすことで、伝統的な銀細工の素晴らしい洞察を得て、原材料を美しいジュエリーに変えることができます。私たちのジュエリーのすべての要素は手作業で作られており、伝統的な技術を使用しています。また、手作りの製品を多数展示するショールームもあります。',
    },
    ko: {
      title: '회사 소개',
      description:
        'Sri Rahayu Silver(실버 클래스 및 보석)는 전통적이고 독특한 경험을 제공합니다. 지역 은세공 수업에서 몇 시간을 보내면 전통 은 세공에 대한 훌륭한 통찰력을 얻고 원자재를 아름다운 보석으로 변환할 수 있습니다. 우리의 모든 보석 요소는 손으로 제작되며 전통적인 기술을 사용합니다. 또한 많은 수제 제품을 전시하는 쇼룸도 있습니다.',
    },
  };

  return (
    <div className="pt-[200px] pb-10 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex flex-col w-[300px] gap-4">
        <p className="font-sans text-4xl font-semibold text-center md:text-end">{content[language].title}</p>
        <p className="text-gray-700 text-justify">{content[language].description}</p>
      </div>
      <div className="flex justify-center">
        <img src={AboutJpg} className="w-[500px] rounded-lg shadow-lg" alt="About Sri Rahayu Silver" />
      </div>
    </div>
  );
};

export default AboutUs;
