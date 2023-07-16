import { A } from "@solidjs/router";
import { Component } from "solid-js";
import "./underline.css";
import { TbShoppingCart } from 'solid-icons/tb';
import logo from "../assets/images/logo.svg";

const Navbar: Component = () => {
  return (
    <div class="flex justify-between py-2 px-5 items-center">
      <A href="/home" class="font-mauline text-5xl bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">
        RIDE & RENT
      </A>

      <div class="flex gap-10 -ml-16">
        <div class="flex gap-1">
          <div>
            <A href="/info" class="font-montserrat font-semibold">
              About
            </A>
            <hr class="style-two" />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
        <div class="flex gap-1">
          <div>
            <A href="/collections" class="font-montserrat font-semibold">
              Car Collections
            </A>
            <hr class="style-two" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
        <div class="flex gap-1">
          <div>
            <A href="/search" class="font-montserrat font-semibold">
              Search
            </A>
            <hr class="style-two" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 my-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>

      <div class="flex gap-5">
        <A href="/cart">
          <TbShoppingCart  class="w-12 h-12 my-auto bg-yellow-200 p-[10px] rounded-full text-yellow-700"/>
        </A>
        {/* <A href="/profile">
          <button class="px-7 py-3 bg-gradient-to-r from-yellow-200 to-amber-400 rounded-full">
            <div class="font-semibold font-montserrat text-black">
              Oeuvars
            </div>
          </button>
        </A> */}

      </div>
    </div>
  );
};

export default Navbar;
