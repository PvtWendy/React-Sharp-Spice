import { useEffect, useState } from "react";
import "./App.css";
import Article from "./components/Article";
import Carousel from "./components/Carousel";
import ControlPanel from "./components/ControlPanel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { usePosts } from "./postsContext";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
function App() {
  const { posts } = usePosts();
  const [page, setPage] = useState("home");

  //Renders articles based on how many posts there are
  //Although props counts as unused, it renders the Article props >>DO NOT REMOVE<<
  const renderedArticles = posts.map((props, index) => (
    <Article
      key={`Article${index}`}
      image={posts[index].image}
      title={posts[index].title}
      state={index % 2 == 0 ? "left" : "right"}
      text={posts[index].shortPost}
      full={posts[index].longPost}
      index={index}
    />
  ));
  switch (page) {
    case "home":
      return (
        <div>
          <Header
            Home={() => setPage("home")}
            About={() => setPage("about")}
            Contact={() => setPage("contact")}
          />
          <Carousel />
          <section className="articleContainer" id="postsContainer">
            {renderedArticles}
          </section>
          <Footer />
          <ControlPanel />
        </div>
      );
    case "contact":
      return (
        <div>
          <Header
            Home={() => setPage("home")}
            About={() => setPage("about")}
            Contact={() => setPage("contact")}
          />
          <Contact />
          <Footer />
        </div>
      );
    case "about":
      return (
        <div>
          <Header
            Home={() => setPage("home")}
            About={() => setPage("about")}
            Contact={() => setPage("contact")}
          />
          <About />
          <Footer />
        </div>
      );
    default:
      break;
  }
}

export default App;
