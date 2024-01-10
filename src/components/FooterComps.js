// import css
import "../css/Footer.css";

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterComps = () => {
  return (
    <footer>
      <div className="rowFooter">
        <div className="colFooter">
          <img
            src="./assets/logo/LKTIN.png"
            alt="Footer Logo"
            className="logoFooter"
          ></img>
        </div>
        <div className="colFooter">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <a
            href="https://goo.gl/maps/9x18coXGCmSscKec6"
            target="_blank"
            rel="noreferrer"
            className="office text-justify"
          >
            Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat
            16519
          </a>
          <br></br>
          <br></br>
          <a
            href="mailto:lktin.iysa@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="office "
          >
            lktin.iysa@gmail.com
          </a>
          <br></br>
          <br></br>
          <a
            href="https://wa.me/+6281770914129"
            target="_blank"
            rel="noreferrer"
            className="office "
          >
            +62 817 7091 4129
          </a>
        </div>
        <div className="colFooter">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="/">Utama</a>
            </li>
            <li>
              <a href="/#About">Tentang</a>
            </li>
            <li>
              <a href="/Faq">FAQ</a>
            </li>
            <li>
              <a href="/Contact">Kontak</a>
            </li>
          </ul>
        </div>
        <div className="colFooter">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>{" "}
          </h3>
          <form action="https://formspree.io/f/xeqbelvo" method="POST">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="logoNewsletter"
            ></FontAwesomeIcon>
            <input
              type="email"
              name="Enter Email"
              placeholder="Enter Email"
              required
            />
            <button type="submit">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="logoButtonNewsletter"
              ></FontAwesomeIcon>
            </button>
          </form>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100063979907207"
              target="_blank"
              rel="noreferrer"
            >
              <i className="">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="footer-social-icons-fb"
                ></FontAwesomeIcon>
              </i>
            </a>
            <a
              href="https://www.instagram.com/iysa_official/?hl=id"
              target="_blank"
              rel="noreferrer"
            >
              <i className="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footer-social-icons-ig"
                ></FontAwesomeIcon>
              </i>
            </a>
            <a
              href="https://www.youtube.com/@IYSAOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <i className="">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="footer-social-icons-yt"
                ></FontAwesomeIcon>
              </i>
            </a>
            <a
              href="https://www.tiktok.com/@iysa.official"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="footer-social-icons-tt"
                />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="footer-social-icons-ld"
                />
              </i>
            </a>
          </div>
        </div>
      </div>
      <hr className="mx-auto" />
      <p className="copyright">
        Copyright &copy; 2024, Developed by IYSA IT Division
      </p>
    </footer>
  );
};
export default FooterComps;
