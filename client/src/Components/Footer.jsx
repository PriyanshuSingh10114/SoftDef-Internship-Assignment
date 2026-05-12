import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          {/* LEFT */}
          <div>
            <div className="logo">
              <img
                src={logo}
                alt="FloraVision Logo"
              />
              <h1 className="footer-heading-logo">FloraVision.</h1>
            </div>
            <p className="footer-text">
              "From lush indoor greens to vibrant outdoor blooms,
              our plants are crafted to thrive and elevate
              your living environment."
            </p>
            <div className="socials">
              <span>FB</span>
              <span>TW</span>
              <span>LI</span>
            </div>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="footer-heading">
              Quick Links
            </h3>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/">Types Of Plants</a>
              <a href="/">Contact</a>
              <a href="/">Privacy</a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="footer-heading">
              For Every Update.
            </h3>
            <div className="subscribe-box">
              <input
                type="text"
                placeholder="Enter Email"
              />
              <button>
                SUBSCRIBE
              </button>
            </div>
            <p className="copyright">
              FloraVision © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}