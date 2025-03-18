import Landing from "../components/Landing";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-dark-primary flex flex-col gap-8 max-w-xl mx-auto">
        <Navbar />
        <Landing />
        <Education />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Home;
