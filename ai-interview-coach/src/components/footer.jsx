import "../footer.css";
 import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h3>Help</h3>
          

<Link to="/faq">Frequently Asked Questions (FAQ)</Link>
          <p>User Guide</p>
        </div>

        <div>
          <h3>Support</h3>
           <a href="mailto:ishxn36@gmail.com">
            ishxn36@gmail.com
          </a>
          <p>Helpline NO</p>
            <a href="tel:+91********">   +91 *********</a>
        </div>

        <div>
          <h3>Report Issue</h3>
            <a href="mailto:ishxn36@gmail.com">
           Bug Report /Chat Option
          </a>
           <a href="mailto:ishxn36@gmail.com">Feedback</a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 AI Interview Coach. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;