import styled from "styled-components";
import tw from "twin.macro";

export const LoadingMessage = styled.p`
  ${tw`text-center text-white`}
`;

export const EndMessage = styled.div`
  ${tw`p-8`}
`;

export const Divider = styled.hr`
  ${tw`border-t-2 border-gray-200`}
`;

export const EndMessageText = styled.p`
  ${tw`text-center text-lg text-white p-4 font-bold`}
`;

export const GridContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
`;
