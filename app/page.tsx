import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Misc from "./components/Misc";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Misc/>
      <Footer/>

    </main>
  );
}
