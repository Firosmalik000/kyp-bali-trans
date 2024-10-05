import HomeHero from '../components/fragments/HomeHero';

import HomeBali from '../components/fragments/HomeBali';
import HomeGallery from '../components/fragments/HomeGallery';
import HomePackage from '../components/fragments/HomePackage';
import HomeServices from '../components/fragments/HomeServices';

const Home = () => {
  return (
    <div className="mt-[100px]">
      <HomeHero />
      <HomeBali />
      <HomePackage />
      <HomeServices />
      <HomeGallery />
    </div>
  );
};

export default Home;
