import React from "react";
import { PokemonCardsProvider } from "../../context/PokemonCardsContext";
import PokemonsList from "../PokemonsList";
import SearchInput from "../SearchInput";
import {
  PokemonCardsContainer,
  PokemonCardsTitle,
  SearchInputContainer,
} from "./styled";

export const PokemonCards: React.FC = () => {
  const [isSticky, setIsSticky] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PokemonCardsProvider>
      <PokemonCardsContainer isSticky={isSticky}>
        <PokemonCardsTitle>Pokemon Cards</PokemonCardsTitle>

        <SearchInputContainer isSticky={isSticky}>
          <SearchInput />
        </SearchInputContainer>

        <PokemonsList />
      </PokemonCardsContainer>
    </PokemonCardsProvider>
  );
};
