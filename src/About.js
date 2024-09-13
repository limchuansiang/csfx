import React from 'react'

const About = () => {
    return (
        <section id="about" className="about section dark-background">
            <div className="container section-title" data-aos="fade-up">
                <span>How we do it<br/></span>
                <h2>How we do it<br/></h2>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
                        <p>
                            <b>In the murky depths of the financial underworld,</b> scammers usually advertise attractive exchange rates to lure unsuspecting victims into paying <u>hidden fees</u> and <u>getting poor deals</u>.
                        </p>
                        <p>
                            <b>Then in September 2024,</b> a rogue insider swiped their trick and launched <a href="/">CSFX</a>. Here's how: We proudly display these fantastic midrates to tempt you in, but we conveniently keep our stock "out of stock" <u>forever</u>.
                        </p>
                        <p>
                            <b>This way,</b> we can continue offering you the best rates you'll never actually trade, keeping our business thriving without the risks.
                        </p>
                        <a href="#convert" className="read-more"><span>That's Smart! Show me the rates</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
