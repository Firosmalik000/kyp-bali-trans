import HomeHero from '../components/fragments/HomeHero';

import HomeBali from '../components/fragments/HomeBali';
import HomeGallery from '../components/fragments/HomeGallery';
import HomePackage from '../components/fragments/HomePackage';
import HomeServices from '../components/fragments/HomeServices';
import TourAndDestination from '../components/fragments/TourAndDestination';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeBali />
      <HomePackage />
      <HomeServices />
      <TourAndDestination />
      <HomeGallery />
    </div>
  );
};

export default Home;
