import "./App.css";
import Article from "./components/Article";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
//TODO: Build a global image map to be able to access the images from anywhere
import Crostini from "./images/Crostini.png";
import Kitchen from "./images/Kitchen.png";
import Nutrition from "./images/Nutrition.png";
import Presentation from "./images/Presentation.png";
import Airfryer from "./images/Airfryer.png";
import { posts } from "./posts";
import { useState } from "react";
import ControlPanel from "./components/ControlPanel";
function App() {
  //Array state for ease of access using map

  const [open, setOpen] = useState([false, false, false]);

  //Function to rebuild the array, updating the value specified on index

  const openCarousel = (index) => {
    const newOpen = [...open];
    newOpen[index] = true;
    setOpen(newOpen);
  };
  const images = [Kitchen, Crostini, Nutrition, Presentation, Airfryer];

  //Renders articles based on how many posts there are
  //Although props counts as unused, it renders the Article props >>DO NOT REMOVE<<

  const renderedArticles = posts.map((props, index) => (
    <Article
      image={images[index]}
      state={index % 2 == 0 ? "left" : "right"}
      text={posts[index].shortPost}
      full={posts[index].longPost}
      //Updates these props values if they're still on the carousel
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
      <ControlPanel />
    </div>
  );
}

export default App;
