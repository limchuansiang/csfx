import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className="footer position-relative dark-background">

            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-about">
                            <a href="index.html" className="logo sitename">CSFX</a>
                            <div className="footer-contact pt-3">
                                <p>480 Lowrong 6 Toh Bayou</p>
                                <p>Xinjiapo 310400</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+65 6565 6565</span></p>
                                <p><strong>Email:</strong> <span>info@csfx.com</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#convert">Convert</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#convert">Money conversion</a></li>
                            <li><a href="#convert">Currency exchange</a></li>
                            <li><a href="#convert">Wealth creation</a></li>
                            <li><a href="#convert">Investment options</a></li>
                            <li><a href="#convert">Not a scam</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Day</strong> <span>All Rights Reserved</span></p>
                    <div className="credits" hidden>
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
