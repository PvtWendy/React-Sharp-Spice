import "./style.css";
export default function Contact() {
  return (
    <form>
      <label>Subject</label>
      <br />
      <input type="text" placeholder="E-mail's subject" />
      <br />
      <label>E-mail</label>
      <br />
      <input type="email" placeholder="Your E-mail" />
      <br />
      <label>Message:</label>
      <br />
      <textarea
        name="body"
        cols="30"
        rows="5"
        placeholder="Your Message"
      ></textarea>
      <br />
      <input type="submit" id="button" value="Send" />
    </form>
  );
}
