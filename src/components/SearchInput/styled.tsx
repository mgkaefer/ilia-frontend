import styled from "styled-components";
import tw from "twin.macro";

export const SearchContainer = styled.div`
  ${tw`mx-auto w-full`}
`;

export const SearchLabel = styled.label`
  ${tw`mb-2 text-sm font-medium sr-only text-gray-300`}
`;

export const SearchInputContainer = styled.div`
  ${tw`relative`}
`;

export const SearchIconContainer = styled.div`
  ${tw`absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none`}
`;

export const SearchIcon = styled.svg`
  ${tw`w-4 h-4 text-gray-300 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none`}
`;

export const SearchInput = styled.input`
  ${tw`block p-4 ps-10 text-white w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 focus:bg-gray-700/50 focus:bg-gray-700/50 focus:shadow hover:shadow-slate-100/15 hover:shadow hover:shadow-slate-100/15 duration-300 ease-in-out`}
`;
