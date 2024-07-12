import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMediaQuery } from "react-responsive";

import { PokemonCardsContext } from "../../context/PokemonCardsContext";
import LoadingOverlay from "../LoadingOverlay";
import PokemonCard from "../PokemonCard";
import PokemonCardsSlider from "../PokemonCardsSlider";
import {
  Divider,
  EndMessage,
  EndMessageText,
  GridContainer,
  LoadingMessage,
} from "./styled";

const PokemonsList: React.FC = () => {
  const {cards, hasMore, loadMore} = useContext(PokemonCardsContext);

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  if (!cards?.length) {
    return <LoadingOverlay />;
  }

  return isMobile ? (
    <div className="block sm:hidden">
      <PokemonCardsSlider cards={cards} />
    </div>
  ) : (
    <div className="hidden sm:block">
      <InfiniteScroll
        dataLength={cards.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<LoadingMessage>Loading...</LoadingMessage>}
        endMessage={
          <EndMessage>
            <Divider />
            <EndMessageText>
              You have seen all the Pokemon cards!
            </EndMessageText>
          </EndMessage>
        }
      >
        <GridContainer>
          {cards.map((card) => (
            <PokemonCard key={`grid-${card.id}`} card={card} />
          ))}
        </GridContainer>
      </InfiniteScroll>
    </div>
  );
};

export default PokemonsList;
