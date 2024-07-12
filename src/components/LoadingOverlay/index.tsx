import React from "react";
import { Spinner } from "react-bootstrap";
import { LoadingContent, LoadingOverlayContainer } from "./styled";

const LoadingOverlay: React.FC = () => {
  return (
    <LoadingOverlayContainer>
      <LoadingContent>
        <Spinner animation="border" role="status" variant="secondary">
          <p className="text-lg font-bold text-white">Loading...</p>
        </Spinner>
      </LoadingContent>
    </LoadingOverlayContainer>
  );
};

export default LoadingOverlay;
