import Home from "./Home";
import About from "./components/About";
import Personality from "./components/Personality";
import Role from "./components/Role";
import Adventure from "./components/Adventure";
import JumpingChiChi from "./components/Jumping";
import SMeet from "./components/Meet";
import BuyMerch from "./components/Buy";
import ChiChiBlogs from "./components/Blogs";
import FooterCont from "./components/Footer";
function App() {
  return (
    <>
  <section className="space-y-10">

      <Home/>
      <About/>
      <Personality/>
      <Role/>
      <Adventure/>
      <JumpingChiChi/>
      <SMeet/>
      <BuyMerch/>
      <ChiChiBlogs/>
      <FooterCont/>
  </section>
    </>
   
  );
}

export default App;
