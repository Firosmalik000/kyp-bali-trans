import HomeHero from '../components/fragments/HomeHero';

import HomeBali from '../components/fragments/HomeBali';
import HomeGallery from '../components/fragments/HomeGallery';
import HomePackage from '../components/fragments/HomePackage';
import HomeServices from '../components/fragments/HomeServices';
import TourAndDestination from '../components/fragments/TourAndDestination';
import Transportation from '../components/fragments/Transportation';
import QrCode from '../components/fragments/QrCode';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeBali />
      <HomePackage />
      <HomeServices />
      <Transportation />
      <TourAndDestination />
      <HomeGallery />
      <QrCode />
    </div>
  );
};

export default Home;
