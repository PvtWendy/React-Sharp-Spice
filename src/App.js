import { useEffect, useState } from "react";
import "./App.css";
import Article from "./components/Article";
import Carousel from "./components/Carousel";
import ControlPanel from "./components/ControlPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { usePosts } from "./postsContext";
function App() {
  //Function to rebuild the array, updating the value specified on index

  const { posts } = usePosts();
  //Renders articles based on how many posts there are
  //Although props counts as unused, it renders the Article props >>DO NOT REMOVE<<

  const renderedArticles = posts.map((props, index) => (
    <Article
      image={posts[index].image}
      title={posts[index].title}
      state={index % 2 == 0 ? "left" : "right"}
      text={posts[index].shortPost}
      full={posts[index].longPost}
      index={index}
    />
  ));
  return (
    <div>
      <Header />
      <Carousel />
      <section className="articleContainer" id="postsContainer">
        {renderedArticles}
      </section>
      <Footer />
      <ControlPanel />
    </div>
  );
}

export default App;
