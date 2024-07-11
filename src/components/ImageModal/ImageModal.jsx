import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ modalData, isModalOpen, onModalClose }) {
  const { imageFullSrc, altText, author, likes } = modalData;

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onModalClose}
      shouldCloseOnOverlayClick={true}
      className={css.imageModal}
      overlayClassName={css.imageModal__overlay}
    >
      <img className={css.imageModal__image} src={imageFullSrc} alt={altText} />
      <div className={css.imageModal__info}>
        <p className={css.imageModal__author}>{author}</p>
        <p className={css.imageModal__likes}>{likes} 👍</p>
      </div>
    </ReactModal>
  );
}
