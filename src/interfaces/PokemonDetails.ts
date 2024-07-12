import { AttackDetails } from "./AttackDetails";

export interface PokemonDetails {
  images: {
    small: string;
    large: string;
  };
  name: string;
  id: string | undefined;
  types: string[];
  resistances: string[];
  weaknesses: string[];
  attacks: AttackDetails[];
}
