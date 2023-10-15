// Components

import HeroSection from "./HeroSection";
import Services from "./Services";
import Principles from "./Principles";
import BackToTop from "@/components/BackToTop";
import AboutUs from "./AboutUs";
import ServiceTable from "./ServiceTable";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

// Assets
import Image from "next/image";
import union from "@/public/assets/icons/Union.svg";
export default function HomePage() {
  return (
    <main
      id="home"
      className={`w-full h-full mx-auto mt-44 flex flex-col items-center bg-cover bg-left `}
    >
      <Image
        className="w-[50%] max-lg:w-[70%] max-sm:w-full absolute top-0 left-0 -z-10"
        src={union}
        width={600}
        height={600}
        alt="bg"
        objectFit="cover"
      />
      <HeroSection />
      <Services />
      <BackToTop />
      <Principles />
      <AboutUs />
      <ServiceTable />
      <ContactUs />
      <Footer />
    </main>
  );
}
