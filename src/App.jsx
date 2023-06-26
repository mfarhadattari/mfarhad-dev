import Banner from "./components/Banner";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contract from "./components/Contract";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
AOS.init();

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-space-grotesk w-full">
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Banner></Banner>
        <Skills></Skills>
        <Project></Project>
        <Contract></Contract>
        <Footer></Footer>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
