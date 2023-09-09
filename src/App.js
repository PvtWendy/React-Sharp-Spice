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

  const renderedArticles = posts.map((prop, index) => (
      <Article
      image={Kitchen}
      state={index % 2 == 0 ? "left" : "right"}
      text={posts[index].shortPost}
      full={posts[index].longPost}
      open={false}
      />

    )

  )
  return (
    <div>
      <Header />
      <Carousel
        first={() => setFirstOpen(true)}
        second={() => setSecondOpen(true)}
        third={() => setThirdOpen(true)}
      />
      <section className="articleContainer" id="postsContainer">
        {renderedArticles}
      </section>
      <Footer />
    </div>
  );
}

export default App;
