import React from 'react'

const Hero = () => {
    return (
        <section id="hero" className="hero section dark-background">
            <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row justify-content-start">
                    <div className="col-lg-8">
                        <h2>Welcome to CSFX</h2>
                        <p>We provide you the best exchange rates that you can't get it anywhere</p>
                        <a href="#about" className="btn-get-started">tell me more please</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
