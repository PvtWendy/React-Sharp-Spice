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
  const [open, setOpen] = useState([
    {
      key: 0,
      state: false,
    },
    {
      key: 1,
      state: false,
    },
    {
      key: 2,
      state: false,
    },
    {
      key: 3,
      state: false,
    },
    {
      key: 4,
      state: false,
    },
  ]);
  const updateState = (i) => {
    const newState = open.map((obj) => {
      if (obj.key == i) {
        return { ...obj, state: true };
      } else {
        return { ...obj };
      }
    });
    if (!open[i].state) {
      setOpen(newState);
    }

    console.log(open);
  };
  return (
    <div>
      <Header />
      <Carousel
        first={() => updateState(0)}
        second={() => updateState(1)}
        third={() => updateState(2)}
      />
      <section className="articleContainer">
        <Article
          image={Kitchen}
          state={"left"}
          text={posts[0].shortPost}
          full={posts[0].longPost}
          open={open[0].state}
        />
        <Article
          image={Crostini}
          state={"right"}
          text={posts[1].shortPost}
          full={posts[1].longPost}
          open={open[1].state}
        />
        <Article
          image={Nutrition}
          state={"left"}
          text={posts[2].shortPost}
          full={posts[2].longPost}
          open={open[2].state}
        />
        <Article
          image={Presentation}
          state={"right"}
          text={posts[3].shortPost}
          full={posts[3].longPost}
          open={false}
        />
        <Article
          image={Airfryer}
          state={"left"}
          text={posts[4].shortPost}
          full={posts[4].longPost}
          open={false}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
