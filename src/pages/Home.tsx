import HomeHero from '../components/fragments/HomeHero';

import HomeBali from '../components/fragments/HomeBali';
import HomeGallery from '../components/fragments/HomeGallery';

import HomeServices from '../components/fragments/HomeServices';

import Transportation from '../components/fragments/Transportation';
import QrCode from '../components/fragments/QrCode';
import HomePackage from '../components/fragments/HomePackage';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeBali />

      <HomeServices />
      <Transportation />
      <HomePackage />
      <HomeGallery />
      <QrCode />
    </div>
  );
};

export default Home;
