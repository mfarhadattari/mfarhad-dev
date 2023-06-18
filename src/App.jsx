import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen w-full">
      <Header></Header>
      <Banner></Banner>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
