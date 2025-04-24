import logo from "../assets/anurag-logo.webp"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
            </a>
        </div>
        <div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/a4anurags" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <FaLinkedin />
                </a>

                <a href="https://github.com/ThAnurag2004" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <FaGithub />
                </a>

                <a href="https://leetcode.com/u/anuragsingh888/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <SiLeetcode />
                </a>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar
