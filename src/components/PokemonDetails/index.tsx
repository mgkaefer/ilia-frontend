import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchPokemonById from "../../hooks/useSearchPokemonById";
import { AttackDetails } from "../../interfaces/AttackDetails";
import Accordion from "../Accordion";
import AttackDetailsModal from "../AttackDetailsModal";
import TypeIcon from "../TypeIcon";
import {
  AttackButton,
  AttacksContainer,
  BackIcon,
  BackLink,
  Divider,
  PageContainer,
  PokemonCard,
  PokemonDetails,
  PokemonHeader,
  PokemonId,
  PokemonImage,
  PokemonName,
  ResistancesContainer,
  TypeBadge,
  TypesContainer,
  WeaknessesContainer,
} from "./styled";

const PokemonDetailsPage: React.FC = () => {
  const {id} = useParams<{id: string | undefined}>();
  const {pokemon, isLoading, isError} = useFetchPokemonById(id);
  const [selectedAttack, setSelectedAttack] = useState<AttackDetails | null>(
    null
  );

  const handleCloseModal = () => {
    setSelectedAttack(null);
  };

  const handleShowAttackDetails = (attack: AttackDetails) => {
    setSelectedAttack(attack);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  if (isError)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-red-500">Error fetching data</div>
      </div>
    );

  return (
    <PageContainer className="bg-opacity-50">
      <BackLink to="/">
        <BackIcon />
      </BackLink>

      <PokemonCard>
        <PokemonHeader>
          <PokemonImage src={pokemon?.images?.small} alt={pokemon?.name} />

          <div>
            <PokemonName>{pokemon?.name}</PokemonName>
            <PokemonId>ID: {pokemon?.id}</PokemonId>
          </div>
        </PokemonHeader>

        <Divider />

        <PokemonDetails>
          <Accordion title="Types" initOpen>
            <TypesContainer>
              {pokemon?.types?.map((type, index) => (
                <TypeIcon type={type} key={`type-${type}-${index}`} />
              ))}
            </TypesContainer>
          </Accordion>

          <Accordion title="Resistances" initOpen>
            <ResistancesContainer>
              {pokemon?.resistances?.map((resistance: any) => (
                <TypeBadge key={`rs-${resistance.type}`}>
                  {resistance.type}
                </TypeBadge>
              ))}
            </ResistancesContainer>
          </Accordion>

          <Accordion title="Weaknesses" initOpen>
            <WeaknessesContainer>
              {pokemon?.weaknesses?.map((weakness: any) => (
                <TypeBadge key={`wk-${weakness.type}`}>
                  {weakness.type}
                </TypeBadge>
              ))}
            </WeaknessesContainer>
          </Accordion>

          <Accordion title="Attacks" initOpen>
            <AttacksContainer>
              {pokemon?.attacks?.map((attack) => (
                <AttackButton
                  key={attack.name}
                  onClick={() => handleShowAttackDetails(attack)}
                >
                  {attack.name}
                </AttackButton>
              ))}
            </AttacksContainer>
          </Accordion>
        </PokemonDetails>
      </PokemonCard>
      {selectedAttack && (
        <AttackDetailsModal
          attack={selectedAttack}
          onClose={handleCloseModal}
        />
      )}
    </PageContainer>
  );
};

export default PokemonDetailsPage;
