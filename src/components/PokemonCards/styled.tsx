import styled from "styled-components";
import tw from "twin.macro";

interface PokemonCardsContainerProps {
  isSticky: boolean;
}

interface SearchInputContainerProps {
  isSticky: boolean;
}

export const PokemonCardsContainer = styled.div<PokemonCardsContainerProps>`
  ${tw`h-screen relative w-full sm:h-auto flex flex-col justify-center gap-8 px-8`}
`;

export const PokemonCardsTitle = styled.h1`
  ${tw`text-center text-4xl font-bold text-orange-50`}
`;

export const SearchInputContainer = styled.div<SearchInputContainerProps>`
  ${tw`flex items-center justify-center w-full py-8 bg-background`}

  ${({isSticky}) =>
    isSticky && tw`fixed top-0 left-0 px-8 z-50 shadow-sm shadow-slate-300/25`}
`;
