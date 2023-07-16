import { Component, createSignal, createEffect, Show } from "solid-js";
import { FiSearch } from "solid-icons/fi";
import { FaSolidCalendarDays } from "solid-icons/fa";
import { FaSolidLocationDot } from "solid-icons/fa";
import { HiOutlineChevronDown } from "solid-icons/hi";
import { IoClose } from "solid-icons/io";
import carBrands from "../collections/Brand";
import carModels from "../collections/CarModels";
import { useTopFilterContext } from "../utils/TopFilterContext";
import CarSpecifications from "../collections/CarSpecifications";
import Card from "./Card";

const TopFilter: Component = () => {
  const [isDropdownOpen, setIsDropdownOpen] = createSignal(false);
  const [openModelDropdown, setOpenModelDropdown] = createSignal(false);
  const [openCalenderDropdown, setOpenCalenderDropdown] = createSignal(false);
  const [selectedBrandModels, setSelectedBrandModels] = createSignal<string[]>(
    []
  );
  const [searchQuery, setSearchQuery] = createSignal("");
  const { selectedBrand, setSelectedBrand, selectedModel, setSelectedModel } =
    useTopFilterContext();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen());
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleModelDropdown = () => {
    setOpenModelDropdown(!openModelDropdown());
  };

  const closeModelDropdown = () => {
    setOpenModelDropdown(false);
  };

  const toggleCalenderDropdown = () => {
    setOpenCalenderDropdown(!openCalenderDropdown());
  };

  const closeCalenderDropdown = () => {
    setOpenCalenderDropdown(false);
  };

  const handleBrandSelection = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel("Any");
    setIsDropdownOpen(false);
  };

  const handleModelSelection = (model: string) => {
    setSelectedModel(model);
    setOpenModelDropdown(false);
  };

  createEffect(() => {
    const brandModels =
      carModels.find((carModel) => carModel.brand === selectedBrand())
        ?.models || [];
    setSelectedBrandModels(brandModels);
  });
  createEffect(() => {
    setSearchQuery("");
  });

  return (
    <div class="w-[98%] mx-auto">
      <div class="flex justify-between mt-10">
        <div class="flex py-3 px-5 items-center rounded-lg gap-5 bg-yellow-50/20 shadow-lg backdrop-blur-md mx-auto">
          <div class="flex w-44">
            <div class="w-4/5 font-montserrat text-sm font-medium">
              <p class="text-xs text-yellow-200/50">Car Brand</p>
              <h1>{selectedBrand()}</h1>
            </div>
            <HiOutlineChevronDown
              class="my-auto mx-auto text-white/50 w-7 h-7 cursor-pointer"
              onClick={toggleDropdown}
            />
            <Show when={isDropdownOpen()}>
              <div class="absolute mt-16 bg-white w-44 rounded-md shadow-md h-80 overflow-scroll scroll z-20">
                <div class="flex pl-[148px] fixed z-10 pt-[6px]">
                  <IoClose
                    class="text-black/50 w-6 h-6 cursor-pointer"
                    onClick={closeDropdown}
                  />
                </div>
                {carBrands.map((brand, index) => (
                  <div>
                    <button
                      class={`pt-2 px-2 text-gray-800 font-montserrat font-medium ${
                        brand === selectedBrand() ? "font-bold" : ""
                      }`}
                      onClick={() => handleBrandSelection(brand)}
                    >
                      {brand}
                    </button>
                    <hr class="mt-2" />
                  </div>
                ))}
              </div>
            </Show>
          </div>
          <hr class="w-[1px] h-[50px] rounded-full bg-yellow-100" />
          <div class="flex w-44">
            <div class="w-4/5 font-montserrat text-sm font-medium">
              <p class="text-xs text-yellow-200/50">Car Model</p>
              <h1>{selectedModel()}</h1>
            </div>
            <HiOutlineChevronDown
              class="my-auto mx-auto text-white/50 w-7 h-7 cursor-pointer"
              onClick={toggleModelDropdown}
            />
            <Show when={openModelDropdown()}>
              <div class="absolute mt-16 bg-white w-44 rounded-md shadow-md h-52 overflow-scroll scroll">
                <div class="flex pl-[148px] fixed z-10 pt-[6px]">
                  <IoClose
                    class="text-black/50 w-6 h-6 cursor-pointer"
                    onClick={closeModelDropdown}
                  />
                </div>
                {selectedBrandModels().map((model, index) => (
                  <div>
                    <button
                      class={`pt-2 px-2 text-gray-800 font-montserrat font-medium ${
                        model === selectedModel() ? "font-bold" : ""
                      }`}
                      onClick={() => handleModelSelection(model)}
                    >
                      {model}
                    </button>
                    <hr class="mt-2" />
                  </div>
                ))}
              </div>
            </Show>
          </div>
          <hr class="w-[1px] h-[50px] rounded-full bg-yellow-100" />
          <div class="flex w-60">
            <div class="w-4/5 font-montserrat text-sm font-medium">
              <p class="text-xs text-yellow-200/50">Pickup Location</p>
              <h1>John F. Kennedy Airport</h1>
            </div>
            <FaSolidLocationDot class="fill-white/50 w-6 h-6 my-auto mx-auto" />
          </div>
          <hr class="w-[1px] h-[50px] rounded-full bg-yellow-100" />
          <div class="flex w-60">
            <div class="w-4/5 font-montserrat text-sm font-medium">
              <p class="text-xs text-yellow-200/50">Pickup & Return Date</p>
              <h1>Apr 27 - May 1</h1>
            </div>
            <FaSolidCalendarDays
              class="fill-white/50 w-6 h-6 my-auto mx-auto"
              onClick={toggleCalenderDropdown}
            />
            <Show when={openCalenderDropdown()}>
              <div class="absolute mt-16 bg-white w-48 rounded-md shadow-md px-4 py-2">
                <input
                  type="date"
                  class="flex font-montserrat font-medium text-gray-800 outline-none mx-auto"
                />
                <input
                  type="date"
                  class="flex font-montserrat font-medium text-gray-800 outline-none mx-auto"
                />
              </div>
            </Show>
          </div>
        </div>
      </div>
      <div class="">
        <h2 class="my-5 text-[6rem] font-bold font-mauline text-center text-emerald-600">Results</h2>
        <div class="grid grid-cols-3 gap-y-7">
          {selectedBrand() && (
            <Show when={CarSpecifications.length > 0}>
              {CarSpecifications.map((carSpecs) => {
                if (carSpecs.brand === selectedBrand()) {
                  return carSpecs.models.map((model) => {
                    if (
                      selectedModel() === "Any" ||
                      model.name === selectedModel()
                    ) {
                      return (
                        <div class="">
                          <Card model={model}/>
                        </div>
                      );
                    }
                    return null;
                  });
                }
                return null;
              })}
            </Show>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
