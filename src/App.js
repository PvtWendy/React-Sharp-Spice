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

  return (
    <div>
      <Header />
      <Carousel
        first={()=> setFirstOpen(true)}
        second={()=> setSecondOpen(true)}
        third={()=> setThirdOpen(true)}
      />
      <section className="articleContainer" id="postsContainer">
        <Article
          image={Kitchen}
          state={"left"}
          text={posts[0].shortPost}
          full={posts[0].longPost}
          open={firstOpen}
          setOpen={setFirstOpen}
        />
        <Article
          image={Crostini}
          state={"right"}
          text={posts[1].shortPost}
          full={posts[1].longPost}
          open={secondOpen}
          setOpen={setSecondOpen}
        />
        <Article
          image={Nutrition}
          state={"left"}
          text={posts[2].shortPost}
          full={posts[2].longPost}
          open={thirdOpen}
          setOpen={setThirdOpen}
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
