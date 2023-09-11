import "./style.css";
export default function Header() {
  return (
    <nav>
      <a href="index.html">
        <img src={"/images/Logo.png"}></img>
      </a>
      <div>
        <a href="index.html" class="navItems">
          Home
        </a>
        <a href="contact.html" class="navItems">
          Contact
        </a>
        <a href="about.html" class="navItems">
          About
        </a>
      </div>
    </nav>
  );
}
