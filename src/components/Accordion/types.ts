import { ReactNode } from "react";

export interface AccordionProps {
  title: string;
  children: ReactNode;
  initOpen: boolean | true;
}
