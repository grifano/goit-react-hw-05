import { TiSocialLinkedin } from "react-icons/ti";
import css from "./Footer.module.css";
import { FaGithub } from "react-icons/fa6";
import Container from "../Container/Container";
import grifanoLogo from "../../assets/grifano-logo.svg";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={css.footer__wrap}>
          <a href="http://grifano.com">
            <img
              src={grifanoLogo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="serhii orlenko portfolio website"
              className={css.footer__logoLink}
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
