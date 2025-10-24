import Landing from "@/components/Landing/Landing";
import FeaturedProjects from "@/components/Landing/FeaturedProjects/FeaturedProjects";
import Skills from "@/components/Landing/Skills/Skills";
import Education from "@/components/Landing/Education";
import SpotifyNowPlaying from "@/components/SpotifyWidget/SpotifyWidget";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-dark-primary flex flex-col gap-8">
        <Landing />
        <Education />
        <FeaturedProjects />
        <Skills />
      </div>
      <SpotifyNowPlaying />
    </>
  );
}

export default Home;
