import React from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Header'
import Hero from './Hero.js'
import About from './About'
import Convert from './Convert'
import Footer from './Footer'

function App() {

  React.useEffect(() => {
    let scripts = [
      { src: "assets/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "assets/vendor/glightbox/js/glightbox.min.js" },
      { src: "assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" },
      { src: "assets/vendor/isotope-layout/isotope.pkgd.min.js" },
      { src: "assets/vendor/swiper/swiper-bundle.min.js" },
      { src: "assets/js/main.js" }
    ]

    const LoadExternalScript = () => {
      scripts.map(item => {
        const script = document.createElement("script")
        script.id = "external"
        script.src = item.src
        script.async = true
        script.defer = false
        script.type = "text/javascript"
        document.body.appendChild(script) 
      })
    };
    LoadExternalScript();
    return () => { };
  }, []);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Convert />
      </main>
      <Footer />
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;
