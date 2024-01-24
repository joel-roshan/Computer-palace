import styles from "./page.module.css";
import Hero from "../components/hero/Hero.jsx"
import About from "../components/About/About.jsx"
import Contact from "../components//Contact/Contact.jsx"
import Services from "../components/Services/Services.jsx"
import Faq from "../components/Faqpage/Faqpage.jsx"
import Tabs from "../components/Tabs/Tabs.jsx"
import Map from "../components/Map/Map.jsx"
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer.jsx"
import Watermark from "../components/Watermark/Watermark";

export default function Home() {
  return (
    <div className={styles.main}>
     <div id="home"> <Hero /> </div>
     <div id="tabs"><Tabs /></div>
     <div id="services"><Services /></div>
     <div id="about"> <About /></div>
      <div id="contact"><Contact /></div>
      <div id="location"><Map /></div>
      <Faq />
      <Testimonials />
      <Footer />
      <Watermark />
    </div>
  );
}
