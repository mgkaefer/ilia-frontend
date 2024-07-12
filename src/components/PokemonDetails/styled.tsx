import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export const PageContainer = styled.div`
  ${tw`relative min-h-screen bg-background p-8 flex flex-col items-center justify-center bg-opacity-50 bg-cover bg-center bg-no-repeat`}

  background-image: url('https://tse1.mm.bing.net/th?id=OIG2.VY_nbEE9DUpQfM8K0EKP&pid=ImgGn');

  &::after {
    ${tw`absolute inset-0 bg-black opacity-50`}
    content: '';
  }
`;

export const BackLink = styled(Link)`
  ${tw`z-50 absolute left-4 top-4`}
`;

export const BackIcon = styled(ArrowLeftIcon)`
  ${tw`text-gray-100 w-8 h-8 cursor-pointer`}
`;

export const PokemonCard = styled.div`
  ${tw`z-50 bg-white shadow-md rounded-lg overflow-hidden h-auto w-full max-w-xl`}
`;

export const PokemonHeader = styled.div`
  ${tw`bg-cover bg-center h-auto p-4 flex items-end space-x-4`}
`;

export const PokemonImage = styled.img`
  ${tw`h-40 md:h-56 border-4 border-white`}
`;

export const PokemonName = styled.h1`
  ${tw`text-2xl font-bold text-gray-800`}
`;

export const PokemonId = styled.p`
  ${tw`text-gray-600`}
`;

export const Divider = styled.hr`
  ${tw`border-t-2 border-gray-200`}
`;

export const PokemonDetails = styled.div`
  ${tw`p-4 space-y-4`}
`;

export const TypesContainer = styled.div`
  ${tw`flex flex-wrap mt-2`}
`;

export const ResistancesContainer = styled.div`
  ${tw`flex flex-wrap mt-2`}
`;

export const WeaknessesContainer = styled.div`
  ${tw`flex flex-wrap mt-2`}
`;

export const AttacksContainer = styled.div`
  ${tw`flex flex-wrap mt-2`}
`;

export const TypeBadge = styled.span`
  ${tw`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-gray-300`}
`;

export const AttackButton = styled.button`
  ${tw`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-gray-300`}
`;
