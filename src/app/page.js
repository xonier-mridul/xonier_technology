
import AboutSection from "@/components/layout/AboutSection";
import Banner from "@/components/layout/Banner";
import Partner from "@/components/layout/Partner";
import Redefing from "@/components/layout/Redefing";
import Services from "@/components/layout/Services";
import ClientsSay from "@/components/layout/ClientsSay";
import Awards from "@/components/layout/Awards";
import TechnologySec from "@/components/layout/TechnologySec";
import Contact from "@/components/layout/Contact";
import Feature from "@/components/layout/Feature";
import BusinessBrief from "@/components/layout/BusinessBrief";


export default function Home() {
  return (
   <>
   <Banner/>
   <Partner/>
   <AboutSection/>
   <BusinessBrief/>
   <Redefing/>
   <Services/>
   <ClientsSay/>
   <Awards/>
   <TechnologySec/>
   <Contact/>
   <Feature/>
   </>
  );
}
