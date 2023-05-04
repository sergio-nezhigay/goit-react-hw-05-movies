import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 80%;
  max-width: 600px;
`;

export const ModalHeader = styled.header`
  background-color: #444;
  color: #fff;
  padding: 1rem;
`;

export const ModalCloseButton = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalContent = styled.div`
  padding: 1rem;
`;

export const ModalIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default function Modal({ isOpen, onClose, trailerUrl }) {
  console.log('🚀 ~ file: Modal.jsx:4 ~ Modal ~ Modal:', trailerUrl, isOpen);
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer>
        <ModalHeader>
          <h2>Trailer</h2>
          <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          <ModalIFrame
            src={trailerUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
}
