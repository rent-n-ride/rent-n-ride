import { Component, JSX } from "solid-js";
import { FaSolidCartShopping } from 'solid-icons/fa'
import { useTopFilterContext } from "../utils/TopFilterContext";

interface Model {
  name: string;
  transmission: string;
  fuelType: string;
  seatNumbers: number;
  condition: string;
  price: number;
  rentPrice: number;
}

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  model: Model;
}

const Card: Component<CardProps> = (props) => {
  const { model, ...restProps } = props;

  return (
    <div
      {...restProps}
      class="bg-yellow-50/20 rounded-xl font-montserrat min-w-[470px] min-h-[310px] mx-5 px-4 py-3 shadow-md -z-10"
    >
      <div class="flex justify-between">
        <h2 class="text-4xl font-bold">{model.name}</h2>
        <FaSolidCartShopping class="w-7 h-7 my-auto"/>
      </div>

      <p class="text-sm font-medium opacity-70">${model.price}</p>

      <div class="flex justify-between">
        <div class="flex gap-3 items-center">
          <div class="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-4 h-4 opacity-50 my-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p class="text-sm font-medium">{model.seatNumbers}</p>
          </div>
          <div class="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-4 h-4 opacity-50 my-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
            </svg>
            <p class="text-sm font-medium">{model.transmission}</p>
          </div>
          <div class="flex gap-1">
            <svg fill="#000000" version="1.1" id="Layer_1" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.053 512.053" class="w-4 h-4 my-auto">
            <g>
              <g>
                <g>
                  <path d="M261.36,437.387C202.48,437.28,154.8,389.6,154.693,330.72c0-5.867-4.8-10.667-10.667-10.667
                    c-5.867,0-10.667,4.8-10.667,10.667c0.107,70.613,57.387,127.893,128,128c5.867,0,10.667-4.8,10.667-10.667
                    C272.027,442.187,267.227,437.387,261.36,437.387z"/>
                  <path d="M263.387,3.04c-4.16-4.053-10.773-4.053-14.827,0C241.733,9.76,80.027,169.333,80.027,332.213
                    c0,99.2,78.933,179.84,176,179.84s176-80.64,176-179.84C432.027,168.373,270.32,9.76,263.387,3.04z M256.027,490.72
                    c-85.333,0-154.667-71.147-154.667-158.507c0-134.613,122.88-272.747,154.667-306.24
                    c31.787,33.387,154.667,170.88,154.667,306.24C410.693,419.573,341.253,490.72,256.027,490.72z"/>
                </g>
              </g>
            </g>
            </svg>
            <p class="text-sm font-medium">{model.fuelType}</p>
          </div>
        </div>
        <p class="font-semibold text-4xl">${model.rentPrice}<span class="text-base font-normal">/day</span></p>
      </div>


    </div>
  );
};

export default Card;
