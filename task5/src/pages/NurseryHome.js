import Marquee from '../components/nursery/Marquee';
import NurseryNavbar from '../components/nursery/Navbar';
import Images from '../components/nursery/Images';
import Banner from '../components/nursery/Banner';
import Bottom from '../components/nursery/Bottom';
import Products from '../components/nursery/Products';
import Trending from '../components/nursery/Trending';
import GardenDecor from '../components/nursery/GardenDecor';
import Reviews from '../components/nursery/Reviews';
import FashionStoreBanner from '../components/nursery/FashionStoreBanner';
import Footer from '../components/nursery/Footer';

function NurseryHome() {
  return (
    <>
      <Marquee />
      <NurseryNavbar />
      <Images />
      <Banner />
      <Bottom />
      <Products />
      <Trending />
      <GardenDecor />
      <Reviews />
      <FashionStoreBanner />
      <Footer />
    </>
  );
}

export default NurseryHome;
