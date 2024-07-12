import React from "react";

import {
  AttackDetail,
  AttackDetails,
  AttackText,
  CloseButton,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./styled";
import { AttackDetailsModalProps } from "./types";

const AttackDetailsModal: React.FC<AttackDetailsModalProps> = ({
  attack,
  onClose,
}) => {
  return (
    <ModalOverlay
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Close modal">
          &times;
        </CloseButton>
        <ModalTitle id="modal-title">{attack.name}</ModalTitle>
        <AttackDetails>
          <AttackDetail>Mana Cost: {attack.convertedEnergyCost}</AttackDetail>
          <AttackDetail>Damage: {attack.damage}</AttackDetail>
        </AttackDetails>
        <AttackText>{attack.text}</AttackText>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AttackDetailsModal;
