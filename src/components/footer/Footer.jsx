import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <footer>
            <div className='main-container'>
                <div className="row-float">
                    <span className="left sub">
                        Annie Alfred © 2022
                    </span>
                    <span className="right link">
                        <a className="twitter" target="_blank" href="https://x.com/_UncleTech?t=uwfYPbEW_bYUERkdJ3wk_Q&s=09"><FaTwitter /></a>
                        <a className="linkedIn" target="_blank" href="https://www.linkedin.com/in/alfred-annie-aabab6144"><FaLinkedin /></a>
                        <a className="mail" target="_blank" href="mailto:fredileader@gmail.com"><SiGmail /></a>
                        <a className="gitHub" target="_blank" href="https://github.com/ahLfyreD"><FaGithub /></a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
