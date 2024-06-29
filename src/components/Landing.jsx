function Landing() {
  return (
    <>
      <div className="h-screen container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32">
        <div className="landing-text-container flex flex-col md:my-auto md:mx-auto gap-2">
          <h1 className="text-xl md:text-4xl font-extrabold">
            Emmanuel Cortes Castaneda.
          </h1>
          <h1 className="text-lg md:text-3xl font-extrabold">
            Software Developer.
          </h1>
          <div className="flex flex-row gap-4">
            <img
              src="/techstack/javascript.svg"
              className="w-6 h-6"
              alt="JavaScript"
            />
            <img
              src="/techstack/typescript.svg"
              className="w-6 h-6"
              alt="TypeScript"
            />
            <img src="/techstack/react.svg" className="w-6 h-6" alt="React" />
            <img src="/techstack/node.svg" className="w-6 h-6" alt="Node.js" />
            <img
              src="/techstack/tailwind.svg"
              className="w-6 h-6"
              alt="TailwindCSS"
            />
            <img
              src="/techstack/firebase.svg"
              className="w-6 h-6"
              alt="Firebase"
            />
            <img src="/techstack/python.svg" className="w-6 h-6" alt="Python" />
          </div>
        </div>

        <div className="landing-portrait-container">
          <img
            src="portfolio.jpg"
            alt="me at the Grand Canyon :D"
            className="object-cover md:w-96 md:h-96 rounded-3xl "
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
