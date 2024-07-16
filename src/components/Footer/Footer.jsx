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
          <div className={css.footer__follow}>
            <p>Follow me at 👉</p>
            <ul className={css.footer__socialList}>
              <li>
                <a
                  href="https://www.linkedin.com/in/grifano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="serhii orlenko linkedin"
                  className={css.social__link}
                >
                  <TiSocialLinkedin className={css.social__linkIcon} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/grifano"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="serhii orlenko github"
                  className={css.social__link}
                >
                  <FaGithub className={css.social__linkIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
