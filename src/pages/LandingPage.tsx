import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Testimonials from "../components/testimonialSlider"

function LandingPage () {
    return (
      <div>
        <Hero/>
        <Testimonials />
        <Features/>
        <Footer/>
      </div>
      );
  }
  
  export default LandingPage;
  