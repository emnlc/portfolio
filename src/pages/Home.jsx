import Landing from "../components/Landing";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-8 max-w-xl mx-auto">
        <Navbar />
        <Landing />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Home;
