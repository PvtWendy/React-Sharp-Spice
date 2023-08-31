import "./App.css";
import Article from "./components/Article";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Kitchen from "./images/Kitchen.png";
import Crostini from "./images/Crostini.png";
import Nutrition from "./images/Nutrition.png";
import { posts } from "./posts";
function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <section className="articleContainer" id="postsContainer">
        <Article image={Kitchen} position={"left"} text={posts[0].shortPost} />
        <Article image=
      </section>
      <Footer />
    </div>
  );
}

export default App;
