import "solid-slider/slider.css";
import { Slider, createSlider } from "solid-slider";
import type { Component } from "solid-js";
import car1 from "../assets/images/cars/car1.jpg";
import car2 from "../assets/images/cars/car2.jpg";
import car3 from "../assets/images/cars/car3.jpg";
import car4 from "../assets/images/cars/car4.jpg";
import car5 from "../assets/images/cars/car5.jpg";
import { A } from "@solidjs/router";
import './underline.css'

const Showcase: Component = () => {
  const [slider, { next, prev }] = createSlider();
  slider;
  return (
    <div class="mt-10">
      <div use:slider class="h-[600px]">
        <div class="cursor-pointer relative content__item">
          <A href="/" class="link link--dia absolute px-3 py-1 text-yellow-200">PERFORMANCE TUNING</A>
          <img src={car1} alt="car" class="py-5 rounded-sm -mt-12" />
        </div>
        <div class="cursor-pointer relative content__item">
          <A href="/" class="link link--dia absolute px-3 py-1 text-yellow-200">Paint jobs</A>
          <img src={car2} alt="car" class="py-5 rounded-sm -mt-12" />
        </div>
        <div class="cursor-pointer relative content__item">
          <A href="/" class="link link--dia absolute px-3 py-1 text-yellow-200">
            Disinfectant Services
          </A>
          <img src={car3} alt="car" class="py-5 rounded-sm -mt-12" />
        </div>
        <div class="cursor-pointer relative content__item">
          <A href="/" class="link link--dia absolute px-3 py-1 text-yellow-200">Oil Change</A>
          <img src={car4} alt="car" class="py-5 rounded-sm -mt-12" />
        </div>
        <div class="cursor-pointer relative content__item">
        <A href="/" class="link link--dia absolute px-3 py-1 text-yellow-200">Exhaust Treatment</A>
          <img src={car5} alt="car" class="py-5 rounded-sm -mt-12" />
        </div>
      </div>
      <div class="flex mx-auto justify-center my-5">
        <button
          onClick={prev}
          class="bg-white rounded-sm px-3 py-1 bg-opacity-25 backdrop-blur-md mx-1 hover:scale-105 transition duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-yellow-200 hover:text-yellow-300 transition duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={next}
          class="bg-white rounded-sm px-3 py-1 bg-opacity-25 backdrop-blur-md mx-1 hover:scale-105 transition duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-yellow-200 hover:text-yellow-300 transition duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Showcase;
