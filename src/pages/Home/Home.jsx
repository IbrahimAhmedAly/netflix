import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      praesentium velit pariatur alias odio consequatur reiciendis, optio
      aperiam aut quos ut corrupti, ducimus enim ad. Sint est eaque tempore
      repudiandae. orem ipsum dolor sit amet consectetur adipisicing elit.
      Maxime praesentium velit pariatur alias odio consequatur reiciendis, optio
      aperiam aut quos ut corrupti, ducimus enim ad. Sint est eaque tempore
      repudiandae. rem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      praesentium velit pariatur alias odio consequatur reiciendis, optio
      aperiam aut quos ut corrupti, ducimus enim ad. Sint est eaque tempore
      repudiandae. orem ipsum dolor sit amet consectetur adipisicing elit.
      Maxime praesentium velit pariatur alias odio consequatur reiciendis, optio
      aperiam aut quos ut corrupti, ducimus enim ad. Sint est eaque tempore
      repudiandae.
    </div>
  );
};

export default Home;
