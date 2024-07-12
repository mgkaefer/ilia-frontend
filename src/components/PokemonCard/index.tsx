import { Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import TypeIcon from "../TypeIcon";
import {
  CardId,
  CardImage,
  CardLinkContainer,
  CardTitle,
  TypeIconContainer,
} from "./styled";
import { PokemonCardProps } from "./types";

const PokemonCard: React.FC<PokemonCardProps> = ({card, ...props}) => (
  <Link to={`/pokemon/${card.id}`} key={card.id}>
    <CardLinkContainer className="hover:bg-gray-700/50 hover:shadow hover:shadow-slate-100/15">
      <div className="p-8">
        <CardImage src={card.images?.large} alt="Product image" />
      </div>
      <div className="px-5 pb-5">
        <CardTitle>{card.name}</CardTitle>
        <div className="flex items-center justify-between">
          <CardId>{card.id}</CardId>
          <TypeIconContainer>
            {card?.types?.map((type: any) => (
              <Tooltip key={`${type}-${card.name}`} title={type}>
                <TypeIcon type={type} />
              </Tooltip>
            ))}
          </TypeIconContainer>
        </div>
      </div>
    </CardLinkContainer>
  </Link>
);

export default PokemonCard;
