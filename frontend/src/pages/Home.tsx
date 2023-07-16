import { ParentComponent, from } from "solid-js";
import cover from "../assets/images/cover/cover2.jpg";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";

const Home: ParentComponent = () => {
  return (
    <div class=" mt-16">
      <div class="">
        <div class="justify-between w-11/12 flex mx-auto relative">
          <h1 class="font-suntage text-8xl">
            MERCEDES
            <br />
            BENZ <span class="font-draper font-semibold">1952</span>
          </h1>
          <p class="flex font-montserrat w-[20%] text-right text-sm items-center">
            We know how to amke our customers love us by our high quality
            products with affordable prices.
          </p>
        </div>
        <img src={cover} alt="car" class="w-11/12 flex mx-auto rounded-sm -mt-12" />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
