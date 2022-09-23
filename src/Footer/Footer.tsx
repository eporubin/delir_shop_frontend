import React from "react"
import "./Footer.css"

export default function Footer(){
    return(
       <div className="Footer">
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start bg-white text-muted">
                {/* <!-- Section: Social media --> */}
                 <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
                    <div className="me-5 d-none d-lg-block">
                        <span>Follow us on social networks:</span>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/Delir-289898428288795" className="me-4 link-secondary">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/natali.delir/" className="me-4 link-secondary">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <b className="company-name">Delir</b>
          </h6>
          <p>
            Our primary goal is to satisfy your deepest eating desires by creating new food 
            experiences inspired from traditional recipes.
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Cakes</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Box Sets</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Candy Bars</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Aperitives</a>
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Delivery Area</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> London, SE3 8PU, UK</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            delir.order@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
        </div>
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  -->

  <!-- Copyright -->*/}
  <div className="text-center p-4 copyright-container">
    © 2022 Copyright:
    <a className="text-reset fw-bold" href="https://delirclub.com/"> delirclub.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>

{/* <!-- Footer --> */}
       </div> 
    )
}