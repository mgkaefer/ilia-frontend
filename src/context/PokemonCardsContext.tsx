import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllPokemonCards, getPokemonCardsByName } from "../api/cards";
import useDebounce from "../hooks/useDebounce";
import { Card } from "../interfaces/Card";

interface PokemonCardsContextProps {
  cards: Card[];
  hasMore: boolean;
  loadMore: () => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const PokemonCardsContext =
  React.createContext<PokemonCardsContextProps>({
    cards: [],
    hasMore: true,
    loadMore: () => {},
    searchTerm: "",
    setSearchTerm: () => {},
  });

const PokemonCardsProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setSearchParams({q: debouncedSearchTerm});
  }, [debouncedSearchTerm, setSearchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (debouncedSearchTerm === "") {
          const data = await getAllPokemonCards(page);
          setCards((prevCards) => [...prevCards, ...data]);
          if (data.length === 0) {
            setHasMore(false);
          }
        } else {
          if (page === 1) {
            setCards([]);
          }

          const data = await getPokemonCardsByName(debouncedSearchTerm, page);
          setCards((prevCards) => [...prevCards, ...data]);
          console.log(data);
          if (data.count === 0) {
            setHasMore(false);
          }
        }
      } catch (error) {
        console.error("Error fetching Pokemon cards:", error);
      }
    };

    fetchData();
  }, [debouncedSearchTerm, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <PokemonCardsContext.Provider
      value={{cards, hasMore, loadMore, searchTerm, setSearchTerm}}
    >
      {children}
    </PokemonCardsContext.Provider>
  );
};

const usePokemonCardsContext = () => {
  const context = React.useContext(PokemonCardsContext);

  if (!context) {
    throw new Error(
      "usePokemonCardsContext must be used within a PokemonCardsProvider"
    );
  }

  return context;
};

export { PokemonCardsProvider, usePokemonCardsContext };

