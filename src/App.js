import { useEffect, useState } from "react";
import "./App.css";
import Article from "./components/Article";
import Carousel from "./components/Carousel";
import ControlPanel from "./components/ControlPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { usePosts } from "./postsContext";
function App() {
  //Array state for ease of access using map
  const [open, setOpen] = useState([false, false, false]);

  //Function to rebuild the array, updating the value specified on index
  const openCarousel = (index) => {
    const newOpen = [...open];
    newOpen[index] = true;
    setOpen(newOpen);
  };
  const {posts} = usePosts();
  //Renders articles based on how many posts there are
  //Although props counts as unused, it renders the Article props >>DO NOT REMOVE<<

  const renderedArticles = posts.map((props, index) => (
    <Article
      image={posts[index].image}
      title={posts[index].title}
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
