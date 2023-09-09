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
import { useState } from "react";
function App() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  const openCarousel = (index) => {
    switch (index) {
      case 0:
        setFirstOpen(true);
        break;
      case 1:
        setSecondOpen(true);
      case 2:
        setThirdOpen(true);

      default:
        console.log("Invalid Carousel Index")
        break;
    }
  };
  const open = [firstOpen,secondOpen,thirdOpen]
  const renderedArticles = posts.map((prop, index) => (
    <Article
      image={Kitchen}
      state={index % 2 == 0 ? "left" : "right"}
      text={posts[index].shortPost}
      full={posts[index].longPost}
      open={index < open.length ? open[index] : false}
      setOpen={index < open.length ? () => openCarousel(index) : null}
    />
  ));
  return (
    <div>
      <Header />
      <Carousel
        first={() => openCarousel(0)}
        second={() => openCarousel(1)}
        third={() => openCarousel(2)}
      />
      <section className="articleContainer" id="postsContainer">
        {renderedArticles}
      </section>
      <Footer />
    </div>
  );
}

export default App;
