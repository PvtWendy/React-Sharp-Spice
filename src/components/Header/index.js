import "./style.css";
import Logo from "../../images/Logo.png"
export default function Header() {
    return(<nav>
        <a href="index.html"><img src={Logo}></img></a>
        <div>
            <a href="index.html" class="navItems">Home</a>
            <a href="contact.html" class="navItems">Contact</a>
            <a href="about.html" class="navItems">About</a>
        </div>
    </nav>)
}