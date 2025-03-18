import Home from "./pages/Home";
import StarField from "./components/Starfield";

function App() {
  return (
    <>
      <div className="hidden sm:block sm:absolute top-0 left-0 w-full h-screen overflow-hidden z-[-1]">
        <StarField />
      </div>
      <Home />
    </>
  );
}

export default App;
