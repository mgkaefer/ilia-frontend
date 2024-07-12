import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";
import { usePokemonCardsContext } from "../../context/PokemonCardsContext";
import {
  SearchContainer,
  SearchIconContainer,
  SearchInputContainer,
  SearchLabel,
  SearchInput as StyledSearchInput,
} from "./styled";

const SearchInput: React.FC = () => {
  const {searchTerm, setSearchTerm} = usePokemonCardsContext();

  return (
    <SearchContainer>
      <SearchLabel htmlFor="default-search">Search</SearchLabel>
      <SearchInputContainer>
        <SearchIconContainer>
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </SearchIconContainer>

        <StyledSearchInput
          type="text"
          id="default-search"
          placeholder="Search for a Pokemon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          autoFocus
        />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default SearchInput;
