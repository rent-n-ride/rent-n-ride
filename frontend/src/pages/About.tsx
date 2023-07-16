import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import ferrari from "../assets/images/cars/About2.jpg";
import Line from "../components/Line";
import "../components/underline.css";

const About: ParentComponent = () => {
  return (
    <>
      <div class="w-11/12 flex mx-auto mt-7 justify-between">
        <div class="flex gap-20">
          <h1 class="font-suntage text-3xl flex items-center">Collections</h1>
          <p class="font-montserrat flex items-center text-xs font-medium uppercase">
            / &nbsp; Welcome to Luxury Garage
          </p>
        </div>

        <A href="/collections">
          <button class="border border-yellow-200 px-7 py-3 rounded-full font-montserrat font-medium">
            View All
          </button>
        </A>
      </div>
      <Line />
      <img src={ferrari} class="rounded-sm w-11/12 flex mx-auto saturate-150" />
      <Line />
      <div class="justify-between w-11/12 mx-auto flex mt-4">
        <div class="w-1/5">
            <h1 class="font-draper text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">360+</h1>
            <p class="font-montserrat text-sm">We have already completed 100+ service centers around the globe</p>
        </div>
        <hr class="w-[4px] h-[125px] rounded-full bg-yellow-300" />
        <div class="w-1/5">
            <h1 class="font-draper text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">20+</h1>
            <p class="font-montserrat text-sm">We have achived 20+ international rewards for our collection and services</p>
        </div>
        <hr class="w-[4px] h-[125px] rounded-full bg-yellow-300" />
        <div class="w-1/5">
            <h1 class="font-draper text-5xl mb-5 bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">$34K+</h1>
            <p class="font-montserrat text-sm">We have already turned over 34K dollars for our company</p>
        </div>
      </div>
      <Line />
    </>
  );
};

export default About;
