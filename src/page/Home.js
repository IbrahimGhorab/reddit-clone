import Nav from "../components/Nav";
import Bloglist from "../components/Bloglist";
import Blogdetails from "../page/Blogdetails";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Bloglist />} />
        <Route path="/post/:id" element={<Blogdetails />} />
      </Routes>
    </div>
  );
};

export default Home;
