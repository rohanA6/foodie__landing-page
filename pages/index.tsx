import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

//Components 
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

//Image
import herobackground from "../public/home-banner-background.png";
import aboutbackground from "../public/about-background.png" 


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero section */}
        <div className=" absolute top-0 right-0 -z-20 h-[520px] lg:h-[1077px] lg:w-auto">
          <Image src={herobackground} height={700} width={760} alt="image" />
        </div>
        <HeroSection />

        {/* About section */}
        <div className=" absolute  lg:top-[1260px] left-0 -z-20 h-[220px] w-[250px] lg:h-[1052px] lg:w-[331px]">
          <Image src={aboutbackground} height={700} width={760} alt="image" />
        </div>
        <AboutSection/>

        {/* Work section */}
        <WorkSection/>

        {/* Testimonial section */}
        <TestimonialSection/>

        {/* Contact section */}
        <ContactSection/>

        {/* Footer section */}
        <FooterSection/>
      </main>
    </div>
  );
};

export default Home;
