import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src="../images/lemon.png" alt="logo" />
        <div className="footer-social">
          <h4 className="follow">Follow Us</h4>
          <ul className="footer-list">
            <li>
              <FaInstagram className="social-icons" />
              <FaFacebook className="social-icons" />
              <FaLinkedin className="social-icons" />
            </li>
          </ul>
        </div>
        <p className="copyright">&#169; Little Lemon Restaurant</p>
      </div>
    </footer>
  );
}
