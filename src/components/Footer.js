import github from '../images/github-logo.png';
import linkedin from '../images/linkedin-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__copyright">&#169; 2024 Gabriel Islas García</h4>
      <div className="footer__media">
        <a
          href="https://github.com/Gabrielislas1404"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github icon" className="footer__social" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-islas-garc%C3%ADa-10799620a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin icon" className="footer__social" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
