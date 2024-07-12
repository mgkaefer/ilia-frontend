import styled from "styled-components";
import tw from "twin.macro";

export const LoadingOverlayContainer = styled.div`
  ${tw`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800`}
`;

export const LoadingContent = styled.div`
  ${tw`flex flex-col items-center gap-4`}
`;
