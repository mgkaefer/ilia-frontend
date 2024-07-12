export interface Pokemon {
  image: string;
  url: string;
  name: string;
  id: string;
  types: string[];
  resistances: {type: string; value: string}[];
  weaknesses: {type: string; value: string}[];
  attacks: string[];
}
