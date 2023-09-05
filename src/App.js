import "./App.css";
import Article from "./components/Article";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Crostini from "./images/Crostini.png";
import Kitchen from "./images/Kitchen.png";
import Nutrition from "./images/Nutrition.png";
import Presentation from "./images/Presentation.png";
import Airfryer from "./images/Airfryer.png";
import { posts } from "./posts";
function App() {
  return (
    <div>
      <Header />
      <Carousel/>
      <section className="articleContainer" id="postsContainer">
        <Article image={Kitchen} state={"left"} text={posts[0].shortPost} full={posts[0].longPost}/>
        <Article image={Crostini} state={"right"} text={posts[1].shortPost} full={posts[1].longPost}/>
        <Article image={Nutrition} state={"left"} text={posts[2].shortPost}  full={posts[2].longPost}/>
        <Article image={Presentation} state={"right"} text={posts[3].shortPost} full={posts[3].longPost}/>
        <Article image={Airfryer} state={"left"} text={posts[4].shortPost} full={posts[4].longPost}/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
