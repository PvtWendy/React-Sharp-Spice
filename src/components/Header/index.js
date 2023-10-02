import "./style.css";
export default function Header(props) {
  return (
    <nav>
      <button onClick={props.Home}>
        <img src={"/images/Logo.png"}></img>
      </button>
      <div>
        <button onClick={props.Home} class="navItems">
          Home
        </button>
        <button onClick={props.Contact} class="navItems">
          Contact
        </button>
        <button onClick={props.About} class="navItems">
          About
        </button>
      </div>
    </nav>
  );
}
