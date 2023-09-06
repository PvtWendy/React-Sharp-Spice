import "./style.css";
import Logo from "../../images/Titleless-Logo.png";
export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <section>
        <h2>Redirect</h2>
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="about.html">About</a>
      </section>
      <section>
        <h2>Contact</h2>
        <a href="mailto:wendy@gmail.com">Email</a>
        <a href="tel:+55(65)93805">Call</a>
      </section>
    </footer>
  );
}
