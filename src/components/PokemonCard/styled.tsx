import styled from "styled-components";
import tw from "twin.macro";

export const CardLinkContainer = styled.div`
  ${tw`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-300 ease-in-out mx-auto`}
`;

export const CardImage = styled.img`
  ${tw`rounded-xl`}
`;

export const CardTitle = styled.h5`
  ${tw`text-xl font-semibold tracking-tight text-gray-900 dark:text-white`}
`;

export const CardId = styled.span`
  ${tw`text-sm font-bold text-gray-900 dark:text-gray-300`}
`;

export const TypeIconContainer = styled.div`
  ${tw`flex items-center space-x-1 rtl:space-x-reverse`}
`;
