import CtaSection from './components/ctasection/CtaSection';
import Feature from './components/features/Feature';
import Footer from './components/footer/Footer';
import Heading from './components/navbar/components/Heading';
import LinkEle from './components/navbar/components/LinkEle';
import Navbar from './components/navbar/Navbar';
import NewsLetter from './components/newletter/NewsLetter';
import Pricing from './components/pricingsection/Pricing';
export default function Home() {
  return (
    <>
      <div className="feature-section">
        <Navbar />
        <LinkEle />
        <Heading />
      </div>

      <Feature />

      <CtaSection />

      <Pricing />
      <NewsLetter />
      <Footer />
    </>
  );
}
