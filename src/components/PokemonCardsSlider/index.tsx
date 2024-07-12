import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PokemonCard from "../PokemonCard";
import { SliderProps } from "./types";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PokemonCardsSlider: React.FC<SliderProps> = ({cards}) => {
  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <div key={card.id}>
          <PokemonCard card={card} />
        </div>
      ))}
    </Slider>
  );
};

export default PokemonCardsSlider;
