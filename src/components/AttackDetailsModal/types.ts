import { AttackDetails } from "../../interfaces/AttackDetails";

export interface AttackDetailsModalProps {
  attack: AttackDetails;
  onClose: () => void;
}
