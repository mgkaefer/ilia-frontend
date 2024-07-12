import styled from "styled-components";
import tw from "twin.macro";

export const ModalOverlay = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center`}
`;

export const ModalContent = styled.div`
  ${tw`relative flex flex-col items-center justify-center w-11/12 max-w-md p-8 bg-white rounded-lg shadow-md`}
`;

export const CloseButton = styled.button`
  ${tw`absolute top-2 right-2 text-2xl text-gray-400 cursor-pointer`}
`;

export const ModalTitle = styled.h2`
  ${tw`text-lg font-semibold`}
`;

export const AttackDetails = styled.ul`
  ${tw`flex justify-between items-center mt-2`}
`;

export const AttackDetail = styled.li`
  ${tw`px-4 py-1 bg-primary text-slate-50 border border-gray-200 rounded-full mr-2`}
`;

export const AttackText = styled.p`
  ${tw`mt-4`}
`;
