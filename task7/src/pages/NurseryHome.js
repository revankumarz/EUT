import Marquee from '../components/nursery/Marquee';
import NurseryNavbar from '../components/nursery/Navbar';
import Images from '../components/nursery/Images';
import Banner from '../components/nursery/Banner';
import ShopByLifestyle from '../components/nursery/ShopByLifestyle';
import Bottom from '../components/nursery/Bottom';
import Products from '../components/nursery/Products';
import PlantQuizBanner from '../components/nursery/PlantQuizBanner';
import Trending from '../components/nursery/Trending';
import PlantSubscription from '../components/nursery/PlantSubscription';
import GardenDecor from '../components/nursery/GardenDecor';
import Reviews from '../components/nursery/Reviews';
import Sustainability from '../components/nursery/Sustainability';
import Blogs from '../components/nursery/Blogs';
import FashionStoreBanner from '../components/nursery/FashionStoreBanner';
import Footer from '../components/nursery/Footer';

function NurseryHome() {
  return (
    <>
      <Marquee />
      <NurseryNavbar />
      <Images />
      <Banner />
      <ShopByLifestyle />
      <Bottom />
      <Products />
      <PlantQuizBanner />
      <Trending />
      <PlantSubscription />
      <GardenDecor />
      <Reviews />
      <Sustainability />
      <Blogs />
      <FashionStoreBanner />
      <Footer />
    </>
  );
}

export default NurseryHome;
