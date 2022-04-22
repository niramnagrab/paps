import Group from "./asserts/dpaps.svg"
import Mpaps from "./asserts/mpaps.svg"
import Panda from "./asserts/Panda.png"
import OurStory from "./Ourstory"
import RoadMap from "./Roadmap"
import Faqs from "./Faqs"
import solana from "./asserts/solana-logo.png"


const Home = () => {

  return (
    <>
      <section className="post ">
        <div className=" leftPostContainer max innerPost">
          <div className="postImage">
            <img className="mobileImg" src={Mpaps} alt="" />
            <img className="desktopImg" src={Group} alt="" />
          </div>
          <button className="buyOnmegic">Buy on Magic Eden</button>
          <div className="pandaImage">
          <img src={Panda} alt="Panda Image" />
        </div>
          <div className="home-text">
          <h1>2,500 pandas to take over the post apocalyptic city</h1>
          <p>
            Post Apocalyptic Pandas are a collection of 2,500 hand-drawn
            customizable NFTs warriors that are here to rescue humanity from the
            brink of their own ecological devastation.
          </p>
          <p>
            Pick your weapon of choice from a massive arsenal with the $BAMBOO
            earned from completing team missions against the forces of nature.{" "}
          </p>
          </div>
        </div>
      </section>
      <OurStory />
      <RoadMap />
      <Faqs />
      <div className="solana-logo">
        <p>Powered by</p>
         <img src={solana} alt="" />
         <span>Solana</span>
        </div>
    </>
  )
}

export default Home
